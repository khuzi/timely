import React from "react";

import cLogo from "../../../assets/img/c-logo.png";

export function CompanyArea({ none }) {
  return (
    <div className={`company-area ${none && "d-none"}`}>
      <div className="section-title">
        <h3>Company</h3>
      </div>
      <div className="company-good-fl">
        <div className="company-logo">
          <img src={cLogo} alt="" />
        </div>
        <div className="company-good-text">
          <span>Good Evening</span>
          <h3>Batalian Graphics</h3>
          <p>
            Plan: Basic <a href="/">Upgrade</a>
          </p>
        </div>
      </div>
    </div>
  );
}
