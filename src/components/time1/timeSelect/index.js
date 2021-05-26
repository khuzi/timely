import React from "react";

import { SelectGroup } from "../../shared";
import prnt from "../../../assets/img/print.png";

export function TimeSelect({ none }) {
  if (none) {
    return (
      <div className="time-top-right-fl d-none">
        <div className="time-top-right-lf">
          <div className="time-top-right-lf-title">
            <h3>Show</h3>
            <a href="/time1">
              <img src={prnt} alt="" />
            </a>
          </div>
          <div className="time-top-right-lf-select">
            <SelectGroup width="45%" />
            <div className="single-fl-input">
              <input type="text" placeholder="Search" />
              <a href="/time1">
                <i className="fal fa-search"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="time-top-right-fl">
        <div className="time-top-right-lf">
          <div className="time-top-right-lf-title">
            <h3>Show</h3>
          </div>
          <div className="time-top-right-lf-select">
            <SelectGroup width="180px" />
          </div>
          <div className="time-top-right-lf-icon">
            <a href="/time1">
              <i className="fal fa-search"></i>
            </a>
            <a href="/time1">
              <img src={prnt} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
