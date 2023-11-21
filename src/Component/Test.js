import React, { useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Firebase 초기화 후에 db 객체 가져오기

const Test = () => {
  useEffect(() => {
    getDocumentCount();
    //eslint-disable-next-line
  }, []);

  const getDocumentCount = async () => {
    const giftCollectionRef = collection(db, "gift"); // 'gift' 컬렉션의 참조 가져오기

    try {
      const q = query(giftCollectionRef, where("discountPrice", "<", 4000)); // 'discountPrice' 필드가 3999보다 큰 문서들을 조회하는 쿼리

      const snapshot = await getDocs(q); // 쿼리 결과의 스냅샷 가져오기
      const count = snapshot.size; // 조회된 문서들의 개수

      console.log("조회된 문서 개수:", count);
    } catch (error) {
      console.error("문서를 조회하는 동안 오류 발생:", error);
    }
  };

  return <div>ddd</div>;
};

export default Test;
