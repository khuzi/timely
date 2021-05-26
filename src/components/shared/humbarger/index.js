import React from "react";

export function Humbarger() {
  return (
    <div className="humbarger-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-menu">
              <ul>
                <li>
                  <a href="/" className="acctive">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/">Schedule table</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
