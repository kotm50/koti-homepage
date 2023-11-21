import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import kotilogo from "../../../Asset/Homepage/kotilogo.svg";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";

function Header(props) {
  const thisLocation = useLocation();
  const headerRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [locPath, setLocPath] = useState("");
  useEffect(() => {
    if (headerRef.current.clientHeight) {
      props.setHeight(headerRef.current.clientHeight + 1);
    }
  }, [props]);

  useEffect(() => {
    setIsOpen(false);
    if (thisLocation.pathname.includes("intro")) {
      setLocPath("intro");
    } else if (thisLocation.pathname.includes("consulting")) {
      setLocPath("consulting");
    } else if (thisLocation.pathname.includes("marketing")) {
      setLocPath("marketing");
    } else if (thisLocation.pathname.includes("history")) {
      setLocPath("history");
    } else if (thisLocation.pathname.includes("gallery")) {
      setLocPath("gallery");
    } else {
      setLocPath("");
    }
  }, [thisLocation]);
  return (
    <>
      <div
        ref={headerRef}
        className={`flex flex-row justify-between px-2 py-6 border-b border-gray-300 ${
          isOpen ? "fixedTop" : "static"
        }`}
        style={{ height: isOpen ? `${props.height}px` : "auto" }}
      >
        <Link to="/mobile" className="flex flex-col justify-center col-span-2">
          <img src={kotilogo} alt="코리아티엠로고" className="w-20 h-auto" />
        </Link>
        <div>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <div
        className={`w-full bg-white ${
          isOpen ? "flex" : "hidden"
        } flex-col justify-start gap-y-[24px] fixed pt-[36px]`}
        style={{
          top: `${props.height}px`,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999999,
        }}
      >
        <Link to="/mobile/intro" className="text-[16pt] block px-4 font-bold">
          <span
            className={`${
              locPath === "intro" ? "text-kotired border-b border-kotired" : ""
            }`}
          >
            회사소개
          </span>
        </Link>
        <Link
          to="/mobile/consulting"
          className="text-[16pt] block px-4 font-bold"
        >
          <span
            className={`${
              locPath === "consulting"
                ? "text-kotired border-b border-kotired"
                : ""
            }`}
          >
            컨설팅
          </span>
        </Link>
        <Link
          to="/mobile/marketing"
          className="text-[16pt] block px-4 font-bold"
        >
          <span
            className={`${
              locPath === "marketing"
                ? "text-kotired border-b border-kotired"
                : ""
            }`}
          >
            광고마케팅
          </span>
        </Link>
        <Link to="/mobile/history" className="text-[16pt] block px-4 font-bold">
          <span
            className={`${
              locPath === "history"
                ? "text-kotired border-b border-kotired"
                : ""
            }`}
          >
            회사연혁
          </span>
        </Link>
        <Link to="/mobile/gallery" className="text-[16pt] block px-4 font-bold">
          <span
            className={`${
              locPath === "gallery"
                ? "text-kotired border-b border-kotired"
                : ""
            }`}
          >
            갤러리
          </span>
        </Link>
      </div>
    </>
  );
}

export default Header;
