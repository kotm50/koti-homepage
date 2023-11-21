import React from "react";

function Jumbotron2(props) {
  return (
    <div id="jumbotron">
      <div
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-70 flex flex-col justify-center gap-y-2 text-center relative">
          <div className="w-fit h-fit absolute top-24 left-1/2 -translate-x-1/2 z-20 flex flex-col justify-center text-center">
            <h2 className="titlefont font-bold text-white drop-shadow-2xl">
              {props.title}
            </h2>
            {props.text1 && (
              <div className="subtitlefont font-normal text-white drop-shadow-2xl">
                {props.text1}
              </div>
            )}
            {props.text2 && (
              <div className="subtitlefont font-normal text-white drop-shadow-2xl">
                {props.text2}
              </div>
            )}
          </div>
          <div
            className="koticontainer mx-auto grid grid-cols-3 gap-0"
            style={{
              backgroundImage: `url(${props.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          >
            <div
              className="bg-black bg-opacity-70 h-full flex flex-col justify-end hover:bg-opacity-20 hover:cursor-pointer"
              onClick={() => props.scrollToRef(props.solutionRef)}
            >
              <div className="p-2 text-center font-medium text-white text-[20pt] drop-shadow-2xl">
                채용솔루션
              </div>
            </div>
            <div
              className="bg-black bg-opacity-70 h-full flex flex-col justify-end hover:bg-opacity-20 hover:cursor-pointer"
              onClick={() => props.scrollToRef(props.efficiencyRef)}
            >
              <div className="p-2 text-center font-medium text-white text-[20pt] drop-shadow-2xl">
                효율분석
              </div>
            </div>
            <div
              className="bg-black bg-opacity-70 h-full flex flex-col justify-end hover:bg-opacity-20 hover:cursor-pointer"
              onClick={() => props.scrollToRef(props.infraRef)}
            >
              <div className="p-2 text-center font-medium text-white text-[20pt] drop-shadow-2xl">
                채용인프라
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron2;
