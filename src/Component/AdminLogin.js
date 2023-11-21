import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

import { db, auth } from "../firebase";
import { collection, getDoc, doc } from "firebase/firestore";

import { useSelector } from "react-redux";

function AdminLogin() {
  const user = useSelector(state => state.user);
  let navi = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  useEffect(() => {
    if (user.uid !== "") {
      if (user.admin) {
        navi(-1);
      } else {
        let reLogin = window.confirm(
          "관리자 계정이 아닙니다, 새로 로그인 하시겠습니까?"
        );
        if (reLogin) {
          signOut(auth);
          return alert("로그아웃 되었습니다, 새로 로그인해주세요");
        }
      }
    }
    // eslint-disable-next-line
  }, []);

  const loginAdmin = async e => {
    let body = {
      id: id,
      password: pw,
    };
    await signInWithEmailAndPassword(auth, body.id + "@korea.tm", body.password)
      .then(async userCredential => {
        // Signed in
        const user = userCredential.user;

        const resultRef = collection(db, "admin");
        let result = await getDoc(doc(resultRef, `${user.uid}`));
        if (result.data().id === body.id) {
          alert(`로그인 완료`);
          window.location.reload();
        } else {
          signOut(auth);
          alert("관리자 계정이 아닙니다 확인 후 다시 로그인해주세요");
          setId("");
          setPw("");
        }
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " : " + errorMessage);
        if (errorCode === "auth/wrong-password") {
          return alert("비밀번호가 틀렸습니다");
        }
        // ..
      });
  };
  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    p-3 bg-white rounded-lg min-w-1 min-h-1 drop-shadow-lg w-11/12 lg:w-2/6"
    >
      <h2 className="text-lg mb-3">관리자 로그인</h2>
      <form>
        <div className="mb-3">
          <label
            htmlFor="id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            아이디를 입력해주세요
          </label>
          <input
            type="text"
            id="id"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light"
            value={id}
            onChange={e => setId(e.currentTarget.value)}
            onBlur={e => setId(e.currentTarget.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            비밀번호를 입력하세요(6글자 이상)
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light"
            onKeyDown={e => {
              if (e.key === "Enter") {
                e.preventDefault();
                loginAdmin();
              }
            }}
            value={pw}
            onChange={e => setPw(e.currentTarget.value)}
            onBlur={e => setPw(e.currentTarget.value)}
            autoComplete="off"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          onClick={e => {
            e.preventDefault();
            loginAdmin();
          }}
        >
          관리자로그인
        </button>
        <span className="ml-2 text-sm">
          관리자가 아니라면{" "}
          <span
            className="text-indigo-500 hover:cursor-pointer border-b-2 border-indigo-200"
            onClick={e => {
              e.preventDefault();
              navi("/login");
            }}
          >
            일반 로그인
          </span>
          을 진행해 주세요
        </span>
      </form>
    </div>
  );
}

export default AdminLogin;
