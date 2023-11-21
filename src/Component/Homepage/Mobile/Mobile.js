import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import RenewalModal from "../RenewalModal";

function Mobile() {
  const thisLocation = useLocation();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    // location이 바뀔 때마다 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [thisLocation]);
  return (
    <>
      <Header height={height} setHeight={setHeight} />
      <div className="hidden">
        <RenewalModal />
      </div>
      <Outlet context={height} />
      <Footer />
    </>
  );
}

export default Mobile;
