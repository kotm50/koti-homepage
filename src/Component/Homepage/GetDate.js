import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

function GetDate(props) {
  const [dateForm, setDateForm] = useState("");
  useEffect(() => {
    // 예시로 Firestore에서 받아온 timestamp 객체를 가정합니다.
    const firestoreTimestamp = props.created; // 여기에는 Firestore에서 받은 timestamp 객체를 넣어야 합니다.

    // Firestore Timestamp 객체를 Date 객체로 변환합니다.
    const date = firestoreTimestamp.toDate();

    // 원하는 포맷으로 날짜를 문자열로 변환합니다.
    const dateString = dayjs(date).format("YYYY.MM.DD");
    setDateForm(dateString);
    //eslint-disable-next-line
  }, []);
  return <>{dateForm}</>;
}

export default GetDate;
