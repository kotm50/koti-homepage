import React from "react";
import mainbg from "../../Asset/Homepage/mainbg.webp";

function MainJumbo(props) {
  return (
    <div id="mainJumbo">
      <div
        style={{
          backgroundImage: `url(${mainbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-40 relative">
          <div
            id="shadowTxt"
            className="w-fit h-fit absolute bottom-48 left-48"
          >
            <h2 className="titlefont font-bold text-white leading-tight">
              일하고 싶은 나라를 만드는
              <br />
              <span className="text-kotired">코리아티엠</span>
            </h2>
            <div className="subtitlefont text-white font-bold">
              오늘도 코리아티엠은 채용의 역사를 만들어 갑니다
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainJumbo;
