import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { RxOpenInNewWindow } from "react-icons/rx";

function GiftAdmin() {
  const [loaded, setLoaded] = useState(false);
  const user = useSelector(state => state.user);
  const location = useLocation();
  let navi = useNavigate();
  useEffect(() => {
    chkAdmin(user);
    // eslint-disable-next-line
  }, [location]);

  const chkAdmin = user => {
    setTimeout(() => {
      if (!user.admin) {
        alert("관리자 로그인이 필요합니다");
        navi("/adminlogin");
      } else {
        setLoaded(true);
        return true;
      }
    }, 500);
  };

  return (
    <>
      {loaded ? (
        <div className="container mx-auto grid grid-cols-5 h-50">
          <div className="bg-indigo-50 h-full">
            <Link to="/giftadmin/">
              <h2 className="bg-indigo-500 text-white p-2 text-xl font-medium">
                코티 관리자 페이지
              </h2>
            </Link>
            <div className="flex flex-col justify-start divide-y-2">
              <Link
                to="/home"
                className="text-lg p-2 hover:bg-indigo-200 hover:font-medium w-full"
              >
                홈페이지 메인으로
              </Link>
              <Link
                to="/admin/addgallery"
                className="text-lg p-2 hover:bg-indigo-200 hover:font-medium w-full"
              >
                홈페이지 갤러리 추가
              </Link>
              <a
                href="/sublist"
                className="text-lg p-2 hover:bg-indigo-200 hover:font-medium w-full"
                target="_blank"
                rel="noreferrer noopener"
              >
                Koti프로필 생성신청{" "}
                <RxOpenInNewWindow className="inline text-sm" />
              </a>

              <a
                href="/surveylist"
                className="text-lg p-2 hover:bg-indigo-200 hover:font-medium w-full"
                target="_blank"
                rel="noreferrer noopener"
              >
                KoTI설문지 리스트{" "}
                <RxOpenInNewWindow className="inline text-sm" />
              </a>
            </div>
          </div>
          <div id="admin" className="bg-white col-span-4 p-2">
            <Outlet />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default GiftAdmin;
