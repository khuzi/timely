import React, { useState } from "react";

import { Drawer } from "./drawer";
import logo from "../../../assets/img/site-logo.png";
import riLogo from "../../../assets/img/header-ri-logo.png";

export function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-6">
            <div className="header-logo">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-6">
            <div className="header-fl">
              <div className="header-menu">
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
              <div className="header-ri">
                <a href="/">
                  <i className="far fa-bell"></i> <span></span>
                </a>
                <a href="/">
                  <i className="far fa-cog"></i>
                </a>
                <a href="/">
                  <img src={riLogo} alt="" />
                </a>
                <div className="bar" onClick={() => setOpenDrawer(true)}>
                  <i className="far fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer isOpen={openDrawer} setIsOpen={setOpenDrawer} />
    </div>
  );
}
