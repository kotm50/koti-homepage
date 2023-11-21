import React from "react";

function Jumbotron3(props) {
  return (
    <div id="jumbotron3">
      <div className="h-full">
        <img
          src={props.img}
          alt={props.title}
          className="mx-auto h-full w-auto"
        />
      </div>
    </div>
  );
}

export default Jumbotron3;
