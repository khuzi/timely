import React from "react";

import ci1 from "../../../assets/img/ci1.png";

export function CompanyStats() {
  return (
    <div className="company-stat-section">
      <div className="section-title">
        <h3>Company Stats</h3>
      </div>
      <div className="company-start-box">
        <div className="company-stat-single-box-fl">
          <div className="company-stat-single-box">
            <div className="company-single-box-title">
              <h3>
                <img src={ci1} alt="" />
                05
              </h3>
              <p>Total departments</p>
            </div>
            <div className="company-single-box-btn">
              <a href="/">
                <i className="fal fa-plus"></i>Add department
              </a>
            </div>
          </div>
          <div className="company-stat-single-box cb2">
            <div className="company-single-box-title">
              <h3>
                <img src={ci1} alt="" />
                05
              </h3>
              <p>Total departments</p>
            </div>
            <div className="company-single-box-btn">
              <a href="/">
                <i className="fal fa-plus"></i>Add department
              </a>
            </div>
          </div>
        </div>
        <div className="company-stat-single-box-fl box2">
          <div className="company-stat-single-box box2 cb3">
            <div className="company-single-box-title">
              <h3>
                <img src={ci1} alt="" />
                05
              </h3>
              <p>Total departments</p>
            </div>
          </div>
          <div className="company-stat-single-box box2 cb4">
            <div className="company-single-box-title">
              <h3>
                <img src={ci1} alt="" />
                05
              </h3>
              <p>Total departments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
