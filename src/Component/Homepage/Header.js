import React, { useState } from "react";
import kotilogo from "../../Asset/Homepage/kotilogo.svg";
import kotilogoWhite from "../../Asset/Homepage/kotilogo_white.svg";
import { Link } from "react-router-dom";

function Header() {
  const [galleryLink, setGalleryLink] = useState(false);
  const galleryLinkOn = () => {
    setGalleryLink(true);
  };
  const galleryLinkOff = () => {
    setGalleryLink(false);
  };
  return (
    <>
      <div className="koticontainer mx-auto grid grid-cols-6 pl-20">
        <Link to="/home" className="flex flex-col justify-center col-span-2">
          <img
            src={kotilogo}
            alt="코리아티엠로고"
            className="w-56 h-auto dark:hidden"
          />
          <img
            src={kotilogoWhite}
            alt="코리아티엠로고"
            className="w-56 h-auto hidden dark:block"
          />
        </Link>
        <div className="col-span-4 grid grid-cols-5 gap-0 items-center">
          <Link
            to="/home/intro"
            className="text-[16pt] block p-4 font-bold  hover:text-white hover-bg-kotired py-8 text-center"
          >
            회사소개
          </Link>
          <Link
            to="/home/consulting"
            className="text-[16pt] block p-4 font-bold  hover:text-white hover-bg-kotired py-8 text-center"
          >
            컨설팅
          </Link>
          <Link
            to="/home/marketing"
            className="text-[16pt] block p-4 font-bold  hover:text-white hover-bg-kotired py-8 text-center"
          >
            광고마케팅
          </Link>
          <Link
            to="/home/history"
            className="text-[16pt] block p-4 font-bold  hover:text-white hover-bg-kotired py-8 text-center"
          >
            회사연혁
          </Link>
          <Link
            to="/home/gallery"
            className="text-[16pt] block p-4 font-bold  hover:text-white hover-bg-kotired py-8 text-center"
            onMouseOver={galleryLinkOn}
            onMouseLeave={galleryLinkOff}
          >
            갤러리
          </Link>
        </div>
      </div>
      {galleryLink ? (
        <div
          className="w-full bg-black bg-opacity-70 text-white"
          onMouseOver={galleryLinkOn}
          onMouseLeave={galleryLinkOff}
        >
          <div className="koticontainer mx-auto grid grid-cols-3 divide-x divide-red-500 py-4">
            <Link
              to="/home/gallery"
              className="block text-center text-[14pt] font-normal hover:font-bold hover-text-kotired"
            >
              코리아티엠 소식
            </Link>
            <Link
              to="/home/gallery1"
              className="block text-center text-[14pt] font-normal hover:font-bold hover-text-kotired"
            >
              제휴사 면접사진
            </Link>
            <Link
              to="/home/gallery2"
              className="block text-center text-[14pt] font-normal hover:font-bold hover-text-kotired"
            >
              코리아티엠 워크샵
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Header;
