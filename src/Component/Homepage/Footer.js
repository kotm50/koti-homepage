import React from "react";

function Footer() {
  return (
    <footer id="kotifooter">
      <div className="koticontainer mx-auto flex flex-col justify-start gap-y-2">
        <div className="text-lg text-white">문의전화 1644-4223</div>
        <div className="text-sm flex justify-start gap-x-3">
          <span>주식회사 코리아티엠</span>
          <span>대표 : 김태훈</span>
          <span>서울 중구 다산로 153 코리아티엠</span>
          <span>고객센터 : 1644-4223</span>
          <span>사업자등록번호 : 789-81-02395</span>
        </div>

        <div className="text-sm flex justify-start gap-x-3">
          <span>Copyright ⓒ</span>
          <span>주식회사 코리아티엠</span>
          <span>All right reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
