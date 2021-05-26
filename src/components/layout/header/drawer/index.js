import React from "react";

export function Drawer({ isOpen, setIsOpen }) {
  return (
    <>
      <div
        className="off-canvas-menu"
        style={isOpen ? { left: 0 } : { left: "-100%" }}
      >
        <div className="close-menu" onClick={() => setIsOpen(!isOpen)}>
          <i className="fas fa-times"></i>
        </div>
        <ul>
          <li>
            <a href="/" className="acctive">
              Home
            </a>
          </li>
          <li>
            <a href="/">My employees</a>
          </li>
          <li>
            <a href="/">Schedule Editor</a>
          </li>
          <li>
            <a href="/">Announcements</a>
          </li>
        </ul>
      </div>
      <div
        className={isOpen ? "off-canvas-overlay active" : "off-canvas-overlay"}
      ></div>
    </>
  );
}
