import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase"; // 'firebase' 파일에서 'db'를 가져옴
import GetDate from "../GetDate";

import dompurify from "dompurify";

import { FaAngleUp, FaAngleDown } from "react-icons/fa";

function GalleryDetail() {
  const sanitizer = dompurify.sanitize;
  const navi = useNavigate();
  const thisLocation = useLocation();
  const parsed = queryString.parse(thisLocation.search);
  const id = Number(parsed.id) || 0;
  const tag = parsed.tag || 0;
  const [doc, setDoc] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [nextTitle, setNextTitle] = useState("");
  const [prevTitle, setPrevTitle] = useState("");

  useEffect(() => {
    if (id === "") {
      alert("잘못 된 접근입니다");
      navi("/home");
    } else {
      fetchData(id, tag);
    }
    //eslint-disable-next-line
  }, [thisLocation]);

  useEffect(() => {
    if (doc !== null) {
      fetchSibling(doc.id);
    }
    //eslint-disable-next-line
  }, [doc]);

  const fetchData = async (i, t) => {
    let q;
    if (t === "0") {
      q = query(collection(db, "gallery"), where("id", "==", i));
    } else if (t === "1") {
      q = query(collection(db, "gallery1"), where("id", "==", i));
    } else if (t === "2") {
      q = query(collection(db, "gallery2"), where("id", "==", i));
    }

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      setDoc(doc.data());
    });
  };
  const fetchSibling = async id => {
    const nextId = id + 1;
    const prevId = id - 1;
    let nq;
    let pq;
    if (tag === "0") {
      nq = query(collection(db, "gallery"), where("id", "==", nextId));
      pq = query(collection(db, "gallery"), where("id", "==", prevId));
    } else if (tag === "1") {
      nq = query(collection(db, "gallery1"), where("id", "==", nextId));
      pq = query(collection(db, "gallery1"), where("id", "==", prevId));
    } else if (tag === "2") {
      nq = query(collection(db, "gallery2"), where("id", "==", nextId));
      pq = query(collection(db, "gallery2"), where("id", "==", prevId));
    }
    const nextSnapshot = await getDocs(nq);
    if (nextSnapshot.empty) {
      setNextTitle("");
    } else {
      nextSnapshot.forEach(doc => {
        setNextTitle(doc.data().title);
      });
    }

    const prevSnapshot = await getDocs(pq);
    if (prevSnapshot.empty) {
      setPrevTitle("");
    } else {
      prevSnapshot.forEach(doc => {
        setPrevTitle(doc.data().title);
      });
    }
  };

  return (
    <>
      {doc !== null ? (
        <div className="my-[45px] px-[20px]">
          <h2 className="text-center text-[30pt] font-bold">{doc.title}</h2>
          <div className="text-[10pt] flex justify-center gap-x-[20px]">
            <span className="font-bold text-kotired">
              {tag === "0" ? "신사옥" : tag === "1" ? "면접사진" : "워크샵"}
            </span>
            <span className="font-medium text-gray-500">
              <GetDate created={doc.created} />
            </span>
          </div>
          <div className="w-full h-[1px] bg-gray-300 my-[40px]"></div>
          <img
            src={doc.photo}
            className="w-0 h-0 opacity-0"
            alt={doc.title}
            onLoad={() => setImgLoaded(true)}
          />
          {imgLoaded ? (
            <img
              src={doc.photo}
              className="w-fit max-w-full h-auto mx-auto"
              alt={doc.title}
            />
          ) : (
            <div className="w-full h-[300px] bg-slate-200 aniamte-pulse mx-auto opacity-50" />
          )}
          <div
            className="my-[60px] max-w-full mx-auto galleryContentMobile min-h-[200px]"
            dangerouslySetInnerHTML={{
              __html: sanitizer(doc.content),
            }}
          />
          <div className="border-y border-gray-300 grid grid-cols-1 divide-y divide-gray-300">
            {nextTitle === "" ? (
              <div className="py-[5px] flex flex-row justify-start gap-x-[5px] items-center px-[20px]">
                <div className="text-[10pt] font-medium">다음글</div>
                <FaAngleUp size={12} />
                <div className="text-[10pt] font-medium text-gray-400">
                  다음 글이 없습니다
                </div>
              </div>
            ) : (
              <Link
                to={`/mobile/gallerydetail?id=${doc.id + 1}&tag=${tag}`}
                className="group"
              >
                <div className="py-[5px] flex flex-row justify-start gap-x-[5px] items-center px-[20px]">
                  <div className="text-[10pt] font-medium">다음글</div>
                  <FaAngleUp size={12} />
                  <div className="text-[10pt] font-medium text-gray-700 group-hover:font-bold group-hover:text-black">
                    {nextTitle}
                  </div>
                </div>
              </Link>
            )}
            {prevTitle === "" ? (
              <div className="py-[5px] flex flex-row justify-start gap-x-[5px] items-center px-[20px]">
                <div className="text-[10pt] font-medium">이전글</div>
                <FaAngleDown size={12} />
                <div className="text-[10pt] font-medium text-gray-400">
                  이전 글이 없습니다
                </div>
              </div>
            ) : (
              <Link
                to={`/mobile/gallerydetail?id=${doc.id - 1}&tag=${tag}`}
                className="group"
              >
                <div className="py-[5px] flex flex-row justify-start gap-x-[5px] items-center px-[20px]">
                  <div className="text-[10pt] font-medium">이전글</div>
                  <FaAngleDown size={12} />
                  <div className="text-[10pt] font-medium text-gray-700 group-hover:font-bold group-hover:text-black">
                    {prevTitle}
                  </div>
                </div>
              </Link>
            )}
          </div>
          <button
            className="w-[120px] py-3 bg-black hover:bg-gray-600 text-white mx-auto mt-[20px] block text-[10pt] font-bold"
            onClick={() => navi("/mobile/gallery")}
          >
            목록으로 가기
          </button>
        </div>
      ) : (
        <div className="koticontainer mx-auto my-[145px]">
          <div className="w-full max-w-full h-[96px] bg-slate-200 animate-pulse rounded mx-auto" />
          <div className="w-1/2 max-w-1/4 h-[24px] bg-slate-200 animate-pulse rounded mx-auto" />
          <div className="w-full h-[1px] bg-slate-200 my-[80px] animate-pulse rounded mx-auto" />
          <div className="w-full max-w-full h-[500px] bg-slate-200 animate-pulse rounded mx-auto" />
          <div className="w-1/2 h-[24px] mt-[100px] mb-[5px] bg-slate-200 animate-pulse rounded" />
          <div className="w-1/2 h-[24px] my-[5px] bg-slate-200 animate-pulse rounded" />
          <div className="w-2/3 h-[24px] my-[5px] bg-slate-200 animate-pulse rounded" />
        </div>
      )}
    </>
  );
}

export default GalleryDetail;
