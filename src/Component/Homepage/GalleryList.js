import React from "react";
import { Link } from "react-router-dom";

function GalleryList(props) {
  return (
    <div className="koticontainer mx-auto">
      <div className="border grid grid-cols-3 divide-x mt-[10px]">
        {props.tag === "0" ? (
          <div className="block text-center text-[14pt] font-normal py-4 bg-kotired text-white font-bold">
            코리아티엠 소식
          </div>
        ) : (
          <Link
            to="/home/gallery"
            className="block text-center text-[14pt] font-normal hover:bg-gray-200 py-4 hover:font-bold"
          >
            코리아티엠 소식
          </Link>
        )}
        {props.tag === "1" ? (
          <div className="block text-center text-[14pt] font-normal py-4 bg-kotired text-white font-bold">
            제휴사 면접사진
          </div>
        ) : (
          <Link
            to="/home/gallery1"
            className="block text-center text-[14pt] font-normal hover:bg-gray-200 py-4 hover:font-bold"
          >
            제휴사 면접사진
          </Link>
        )}
        {props.tag === "2" ? (
          <div className="block text-center text-[14pt] font-normal py-4 bg-kotired text-white font-bold">
            코리아티엠 워크샵
          </div>
        ) : (
          <Link
            to="/home/gallery2"
            className="block text-center text-[14pt] font-normal hover:bg-gray-200 py-4 hover:font-bold"
          >
            코리아티엠 워크샵
          </Link>
        )}
      </div>
    </div>
  );
}

export default GalleryList;
