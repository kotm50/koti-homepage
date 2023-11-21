import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { collection, query, getDocs, orderBy } from "firebase/firestore";

import { db } from "../../../firebase"; // 'firebase' 파일에서 'db'를 가져옴

import galleryImg from "../../../Asset/Homepage/gallery.webp";
import Jumbotron from "./Jumbotron";

import dompurify from "dompurify";

import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

import queryString from "query-string";
import ImgLoader from "./ImgLoader";
import GetDate from "../GetDate";

function Gallery() {
  const imgRef = useRef(null);
  const [width, setWidth] = useState(0);
  const sanitizer = dompurify.sanitize;
  const thisLocation = useLocation();
  const navi = useNavigate();
  const parsed = queryString.parse(thisLocation.search);
  const page = Number(parsed.page) || 1;
  const [galleryData, setGalleryData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalDocs, setTotalDocs] = useState(0);
  const [gallNum, setGallNum] = useState("");

  useEffect(() => {
    if (imgRef.current) {
      setWidth(imgRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const path = thisLocation.pathname;
    if (path === "/mobile/gallery") {
      setGallNum("0");
    } else if (path === "/mobile/gallery1") {
      setGallNum("1");
    } else if (path === "/mobile/gallery2") {
      setGallNum("2");
    }
  }, [thisLocation]);

  const handleSelectValue = e => {
    setGallNum(e.target.value);
  };

  useEffect(() => {
    const path = thisLocation.pathname;
    if (gallNum === "0" && path !== "/mobile/gallery") {
      navi("/mobile/gallery");
    } else if (gallNum === "1" && path !== "/mobile/gallery1") {
      navi("/mobile/gallery1");
    } else if (gallNum === "2" && path !== "/mobile/gallery2") {
      navi("/mobile/gallery2");
    }

    //eslint-disable-next-line
  }, [gallNum]);

  const fetchData = async page => {
    const perPage = 10;
    const q = query(collection(db, "gallery2"), orderBy("id", "desc"));
    const querySnapshot = await getDocs(q);

    const filteredDocs = querySnapshot.docs.filter(doc => doc.id !== "serial");
    const totalPages = Math.ceil(filteredDocs.length / perPage);

    const start = (page - 1) * perPage;
    const end = page * perPage;
    const data = filteredDocs.slice(start, end).map(doc => doc.data());
    setTotalDocs(filteredDocs.length);
    setGalleryData(data);
    setTotalPages(totalPages);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      navi(`/mobile/gallery2?page=${page + 1}`);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      navi(`/mobile/gallery2?page=${page - 1}`);
    }
  };
  const handleLastPage = () => {
    if (page < totalPages) {
      navi(`/mobile/gallery2?page=${totalPages}`);
    }
  };

  const handleFirstPage = () => {
    if (page > 1) {
      navi(`/mobile/gallery2?page=${1}`);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <>
      <Jumbotron
        img={galleryImg}
        title={"GALLERY"}
        text1={"코리아티엠의 추억을 소중하게"}
      />
      <div className="mt-[45px] mb-[16px]">
        <h2 className="text-[30pt] font-bold text-center">
          <span className="text-kotired">W</span>ORKSHOP
        </h2>
        <h3 className="text-[12pt] font-medium text-center leading-3 mb-[40px]">
          코리아티엠 워크샵
        </h3>
      </div>
      {galleryData.length > 0 ? (
        <>
          <div className="border-b-2 border-gray-500 flex flex-row justify-between mb-[16px] items-center px-[20px]">
            <div className="text-[10pt] pb-[10px]">
              {"[ "}
              {page} / {totalPages} 페이지
              {" ] "}총 {totalDocs}건
            </div>
            <div className="pb-[10px]">
              <select
                className="p-2 text-[10pt] font-bold bg-kotired text-white block w-full"
                value={gallNum}
                onChange={handleSelectValue}
              >
                <option value="0" className="bg-gray-50 text-black">
                  코리아티엠 소식
                </option>
                <option value="1" className="bg-gray-50 text-black">
                  제휴사 면접사진
                </option>
                <option value="2" className="bg-gray-50 text-black">
                  워크샵
                </option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-0 px-[20px]">
            {galleryData.map((gal, idx) => (
              <Link
                to={`/mobile/gallerydetail?id=${gal.id}&tag=2`}
                key={gal.id}
                className="group"
              >
                <div className="py-[40px] border-b border-gray-200 grid grid-cols-2 gap-x-0">
                  <ImgLoader img={gal.photo} />
                  <div className="flex flex-col justify-between px-4">
                    <div className="flex flex-col justify-start gap-y-[5px]">
                      <div className="text-[10pt] text-kotired font-bold">
                        워크샵
                      </div>
                      <div className="text-[12pt] font-bold text-black whitespace-nowrap truncate">
                        {gal.title}
                      </div>
                    </div>
                    <div
                      className="text-gray-500 text-[10pt]"
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(gal.content),
                      }}
                    />
                    <div className="text-gray-500 text-[10pt]">
                      <GetDate created={gal.created} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-[10px] mb-[145px] gap-x-[10px]">
            {page !== 1 ? (
              <button
                onClick={handleFirstPage}
                className="hover:font-bold hover-text-kotired"
              >
                <FaAngleDoubleLeft size={20} className="inline mb-[2px]" />
              </button>
            ) : (
              <div></div>
            )}
            {page !== 1 ? (
              <button
                onClick={handlePrevPage}
                className="hover:font-bold hover-text-kotired"
                disabled={page === 1}
              >
                <FaAngleLeft size={20} className="inline mb-[2px]" />
              </button>
            ) : (
              <div></div>
            )}
            <div className="flex justify-center gap-x-[10px] items-center">
              {page > 2 && (
                <Link
                  to={`/mobile/gallery?page=${page - 2}`}
                  className="text-gray-500 hover:font-bold hover-text-kotired"
                >
                  {page - 2}
                </Link>
              )}
              {page > 1 && (
                <Link
                  to={`/mobile/gallery?page=${page - 1}`}
                  className="text-gray-500 hover:font-bold hover-text-kotired"
                >
                  {page - 1}
                </Link>
              )}
              <span className="font-bold text-kotired">{page}</span>
              {totalPages - page >= 1 && (
                <Link
                  to={`/mobile/gallery?page=${page + 1}`}
                  className="text-gray-500 hover:font-bold hover-text-kotired"
                >
                  {page + 1}
                </Link>
              )}
              {totalPages - page >= 2 && (
                <Link
                  to={`/mobile/gallery?page=${page + 2}`}
                  className="text-gray-500 hover:font-bold hover-text-kotired"
                >
                  {page + 2}
                </Link>
              )}
            </div>
            {page !== totalPages ? (
              <button
                onClick={handleNextPage}
                disabled={page === totalPages}
                className="hover:font-bold hover-text-kotired"
              >
                <FaAngleRight size={20} className="inline mb-[2px]" />
              </button>
            ) : (
              <div></div>
            )}

            {page !== totalPages ? (
              <button
                onClick={handleLastPage}
                className="hover:font-bold hover-text-kotired"
              >
                <FaAngleDoubleRight size={20} className="inline mb-[2px]" />
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </>
      ) : (
        <div className="px-[20px]">
          <div className="text-[20pt] border-b-2 border-gray-500 pb-[10px] mb-[16px]">
            <div className="w-[400px] h-[24px] bg-slate-200 animate-pulse rounded" />
          </div>
          <div className="grid grid-cols-1 gap-y-0 mb-[145px]">
            <div className="py-[40px] border-b border-gray-200 grid grid-cols-3 gap-x-[50px]">
              <div
                className="w-full"
                ref={imgRef}
                style={{ height: `${width}px` }}
              >
                <div className="w-full h-full animate-pulse rounded bg-slate-200" />
              </div>
              <div className="col-span-2 flex flex-col justify-between">
                <div className="flex flex-col justify-start gap-y-[30px]">
                  <div className="h-[20px] w-[60px] bg-slate-200 animate-pulse rounded" />
                  <div className="h-[30px] w-[300px] bg-slate-200 animate-pulse rounded" />
                </div>
                <div className="h-[80px] w-[200px] bg-slate-200 animate-pulse rounded" />
                <div className="h-[24px] w-[120px] bg-slate-200 animate-pulse rounded" />
              </div>
            </div>
            <div className="py-[40px] border-b border-gray-200 grid grid-cols-3 gap-x-[50px]">
              <div
                className="w-full"
                ref={imgRef}
                style={{ height: `${width}px` }}
              >
                <div className="w-full h-full animate-pulse rounded bg-slate-200" />
              </div>
              <div className="col-span-2 flex flex-col justify-between">
                <div className="flex flex-col justify-start gap-y-[30px]">
                  <div className="h-[20px] w-[60px] bg-slate-200 animate-pulse rounded" />
                  <div className="h-[30px] w-[300px] bg-slate-200 animate-pulse rounded" />
                </div>
                <div className="h-[80px] w-[200px] bg-slate-200 animate-pulse rounded" />
                <div className="h-[24px] w-[120px] bg-slate-200 animate-pulse rounded" />
              </div>
            </div>
            <div className="py-[40px] border-b border-gray-200 grid grid-cols-3 gap-x-[50px]">
              <div
                className="w-full"
                ref={imgRef}
                style={{ height: `${width}px` }}
              >
                <div className="w-full h-full animate-pulse rounded bg-slate-200" />
              </div>
              <div className="col-span-2 flex flex-col justify-between">
                <div className="flex flex-col justify-start gap-y-[30px]">
                  <div className="h-[20px] w-[60px] bg-slate-200 animate-pulse rounded" />
                  <div className="h-[30px] w-[300px] bg-slate-200 animate-pulse rounded" />
                </div>
                <div className="h-[80px] w-[200px] bg-slate-200 animate-pulse rounded" />
                <div className="h-[24px] w-[120px] bg-slate-200 animate-pulse rounded" />
              </div>
            </div>
            <div className="py-[40px] border-b border-gray-200 grid grid-cols-3 gap-x-[50px]">
              <div
                className="w-full"
                ref={imgRef}
                style={{ height: `${width}px` }}
              >
                <div className="w-full h-full animate-pulse rounded bg-slate-200" />
              </div>
              <div className="col-span-2 flex flex-col justify-between">
                <div className="flex flex-col justify-start gap-y-[30px]">
                  <div className="h-[20px] w-[60px] bg-slate-200 animate-pulse rounded" />
                  <div className="h-[30px] w-[300px] bg-slate-200 animate-pulse rounded" />
                </div>
                <div className="h-[80px] w-[200px] bg-slate-200 animate-pulse rounded" />
                <div className="h-[24px] w-[120px] bg-slate-200 animate-pulse rounded" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
