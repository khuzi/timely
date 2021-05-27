import React, { useState, useEffect } from "react";

import { TableHead } from "./tableHead";
import { TableBody } from "./tableBody";
import { TableFooter } from "./tablefooter";

const allData = [
  "Rose Bush",
  "Bridget Theriveaquai",
  "Lynne Gwistic",
  "Bridget Theriveaquai",
  "Rose Bush",
  "Col Fays",
  "Bridget Theriveaquai",
  "Lynne Gwistic",
  "Bridget Theriveaquai",
  "Bridget Theriveaquai",
  "Rose Bush",
  "Col Fays",
  "Bridget Theriveaquai",
  "Lynne Gwistic",
  "Bridget Theriveaquai",
  "Rose Bush",
  "Col Fays",
  "Lynne Gwistic",
  "Bridget Theriveaquai",
  "Col Fays",
];

export function Time1Table() {
  const [data, setData] = useState(allData);

  return (
    <div className="tim-table-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="time-table">
              <table className="table">
                <TableHead />
                <TableBody data={data} />
              </table>
            </div>
            <div class="time-table d-none">
              <table class="table">
                <TableHead none />
                <TableBody none data={data} />
              </table>
            </div>
          </div>
        </div>
        <TableFooter data={allData} setData={setData} />
      </div>
    </div>
  );
}
