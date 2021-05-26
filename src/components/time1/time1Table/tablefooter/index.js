import React from "react";

import { InputDropdown } from "../../../shared";

export function TableFooter() {
  return (
    <div className="row mb-100">
      <div className="col-lg-12">
        <div className="time-last-list">
          <div className="time-lastlist-left">
            <h3>Show entries</h3>
            <InputDropdown val1="12" lbl1="12" width="100px" />
          </div>
          <div className="time-last-list-ri">
            <a href="/time1">1</a>
            <a href="/time1">2</a>
            <a href="/time1">3</a>
            <a href="/time1">4</a>
          </div>
        </div>
      </div>
    </div>
  );
}
