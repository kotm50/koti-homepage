import React from "react";

function Jumbotron(props) {
  return (
    <div id="mobileJumbo">
      <div
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-70 flex flex-col justify-center text-center">
          <h2 className="titlefont-m font-bold text-white">{props.title}</h2>
          {props.text1 && (
            <div className="subtitlefont-m font-normal text-white">
              {props.text1}
            </div>
          )}
          {props.text2 && (
            <div className="subtitlefont-m font-normal text-white">
              {props.text2}
            </div>
          )}
          {props.text3 && (
            <div className="subtitlefont-m font-normal text-white">
              {props.text3}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
