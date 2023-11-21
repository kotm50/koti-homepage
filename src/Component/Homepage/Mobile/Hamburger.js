import React from "react";
import "./Hamburger.css";
function Hamburger(props) {
  return (
    <div
      className={`hamburger ${props.isOpen && "is-active"}`}
      id="hamburger-1"
      onClick={e => props.setIsOpen(!props.isOpen)}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
}

export default Hamburger;
