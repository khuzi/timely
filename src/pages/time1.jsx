import React from "react";

import { Humbarger, TimeSelect, Time1Table } from "../components";

export function Time1() {
  return (
    <>
      <Humbarger />
      <div className="time-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="time-top-fl">
                <div className="time-top-left">
                  <h3>
                    <span>Schedule:</span>Week at a glance
                  </h3>
                </div>
                <div className="time-top-right">
                  <TimeSelect none />
                  <TimeSelect />
                </div>
              </div>
            </div>
          </div>
          <Time1Table />
        </div>
      </div>
    </>
  );
}
