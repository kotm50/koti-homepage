import React from "react";
import kotilogoWhite from "../../../Asset/Homepage/kotilogo_white.svg";

function Footer() {
  return (
    <footer id="kotifooter">
      <div className="mx-auto flex flex-col justify-start gap-y-2 px-4">
        <div className="text-left">
          <img
            src={kotilogoWhite}
            className="inline-block w-auto h-4"
            alt="코리아티엠 로고"
          />
        </div>
        <div className="text-[12pt] text-white">문의전화 1644-4223</div>
        <div className="text-[9pt] flex justify-start gap-x-3">
          <span>주식회사 코리아티엠</span>
          <span>대표 : 김태훈</span>
        </div>
        <div className="text-[9pt] flex justify-start gap-x-3">
          <span>서울 중구 다산로 153 코리아티엠</span>
        </div>
        <div className="text-[9pt] flex justify-start gap-x-3">
          <span>고객센터 : 1644-4223</span>
          <span>사업자등록번호 : 789-81-02395</span>
        </div>

        <div className="text-[9pt] flex justify-start gap-x-3">
          <span>Copyright ⓒ</span>
          <span>주식회사 코리아티엠</span>
          <span>All right reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
