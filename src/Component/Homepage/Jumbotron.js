import React from "react";

function Jumbotron(props) {
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
        <div className="w-full h-full bg-black bg-opacity-70 flex flex-col justify-start text-center pt-28">
          <h2 className="titlefont font-bold text-white">{props.title}</h2>
          {props.text1 && (
            <div className="subtitlefont font-normal text-white">
              {props.text1}
            </div>
          )}
          {props.text2 && (
            <div className="subtitlefont font-normal text-white">
              {props.text2}
            </div>
          )}
          {props.text3 && (
            <div className="subtitlefont font-normal text-white">
              {props.text3}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
