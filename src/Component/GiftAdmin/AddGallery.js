import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules } from "./Data";
import AddGalleryImg from "./AddGalleryImg";

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

function AddGallery() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoTask, setPhotoTask] = useState("");
  const [select, setSelect] = useState(1);

  const handleTitle = e => {
    setTitle(e.target.value);
  };

  const submitGallery = async () => {
    const submit = window.confirm("등록할까요?");
    if (!submit) {
      return alert("확인 후 다시 등록해 주세요");
    }
    const numbers = await getPointSerial(select);
    if (numbers) {
      const data = {
        id: numbers.currentNumber,
        serial: numbers.formattedNumber,
        title: title,
        photo: photo,
        content: content,
        photoTask: photoTask,
        created: serverTimestamp(),
      };

      // 컬렉션 및 문서 ID 설정
      let docRef;
      if (select === "0") {
        docRef = doc(db, "gallery", `gallery_${numbers.formattedNumber}`);
      } else if (select === "1") {
        docRef = doc(db, "gallery1", `gallery_${numbers.formattedNumber}`);
      } else if (select === "2") {
        docRef = doc(db, "gallery2", `gallery_${numbers.formattedNumber}`);
      }

      try {
        // 데이터 쓰기
        await setDoc(docRef, data);
        alert("완료");
        window.location.reload();
      } catch (error) {
        console.error("에러:", error);
        alert("에러");
      }
    }
  };

  const handleChange = e => {
    const value = e.target.value;
    setSelect(value);
  };

  const getPointSerial = async select => {
    console.log(select);
    let serialRef;
    if (select === "0") {
      serialRef = doc(db, "gallery", "serial");
    } else if (select === "1") {
      serialRef = doc(db, "gallery1", "serial");
    } else if (select === "2") {
      serialRef = doc(db, "gallery2", "serial");
    }

    const serialSnapshot = await getDoc(serialRef);
    if (serialSnapshot.exists()) {
      const currentNumber = serialSnapshot.data().number;
      let newNumber = currentNumber + 1;
      if (newNumber > 99999999) {
        newNumber = 0;
      }
      console.log(newNumber);
      // Update the number in Firestore
      await updateDoc(serialRef, {
        number: Number(newNumber),
        totalPage: Number(Math.ceil(Number(newNumber) / 10)),
      });

      // Format the number to 8 digits with leading zeros
      const formattedNumber = String(newNumber).padStart(8, "0");
      return { currentNumber: currentNumber, formattedNumber: formattedNumber };
    } else {
      console.error("Serial number document does not exist.");
    }
  };
  return (
    <>
      <h2 className="text-3xl font-bold py-2">갤러리 추가하기</h2>
      <div className="flex flex-col justify-start gap-y-5">
        <div className="grid grid-cols-6 gap-x-2">
          <label htmlFor="title" className="p-2 text-lg text-right">
            갤러리 선택
          </label>
          <div className="col-span-4">
            <select
              value={select}
              onChange={handleChange}
              className="border p-2"
            >
              <option value={0}>신사옥</option>
              <option value={1}>면접사진</option>
              <option value={2}>워크샵</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-x-2">
          <label htmlFor="title" className="p-2 text-lg text-right">
            제목
          </label>
          <div className="col-span-4">
            <input
              id="title"
              type="text"
              value={title}
              className="p-2 border border-gray-300 w-full"
              onChange={handleTitle}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-x-2">
          <div className="p-2 text-lg text-right">설명</div>
          <div className="col-span-4">
            <div className="font-normal w-full">
              <ReactQuill
                theme="snow"
                modules={modules}
                value={content}
                onChange={setContent}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-x-2">
          <div className="p-2 text-lg text-right">이미지</div>
          <div className="col-span-4">
            <div className="font-normal w-full">
              <AddGalleryImg
                photo={photo}
                setPhoto={setPhoto}
                photoTask={photoTask}
                setPhotoTask={setPhotoTask}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-x-2">
          <div className="p-2 text-lg text-right"></div>
          <div className="col-span-4 font-bold text-center text-sm">
            이미지는 1개만 올릴 수 있습니다.
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-6 gap-x-2">
          <div></div>
          <div className="col-span-4">
            <button
              className="block transition duration-150 bg-sky-500 p-3 text-white font-medium w-full hover:bg-sky-700"
              onClick={submitGallery}
            >
              등록하기
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default AddGallery;
