import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { path } from "../path/path";

function Bg() {
  const thisLocation = useLocation();
  useEffect(() => {
    where(path.some(chkBg));
  });

  const chkBg = (element, index, array) => {
    return thisLocation.pathname.startsWith(element);
  };
  const where = e => {
    if (e) {
      if (thisLocation.pathname === "/promo") {
        document.body.className = "p-0 m-0";
      } else {
        document.body.className =
          "bg-gradient-to-r from-indigo-300 to-purple-400 p-2 min-h-screen";
      }
    } else {
      document.body.className = "";
    }
  };
  return null;
}

export default Bg;
