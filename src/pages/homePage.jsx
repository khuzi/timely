import React from "react";

import {
  Humbarger,
  CompanyArea,
  Latestannouncements,
  CompanyStats,
  MakeAnnouncements,
} from "../components";

export function HomePage() {
  return (
    <>
      <Humbarger />
      <div className="company-stat-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="company-stats-fl">
                <div className="company-stat-left">
                  <CompanyArea none />
                  <Latestannouncements none />
                  <CompanyStats />
                  <Latestannouncements />
                </div>
                <div className="comoany-stat-ri">
                  <CompanyArea />
                  <MakeAnnouncements />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
