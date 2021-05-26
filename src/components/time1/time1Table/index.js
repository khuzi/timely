import React from "react";

import { TableHead } from "./tableHead";
import { TableBody } from "./tableBody";
import { TableFooter } from "./tablefooter";

export function Time1Table() {
  return (
    <div className="tim-table-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="time-table">
              <table className="table">
                <TableHead />
                <TableBody />
              </table>
            </div>
            <div class="time-table d-none">
              <table class="table">
                <TableHead none />
                <TableBody none />
              </table>
            </div>
          </div>
        </div>
        <TableFooter />
      </div>
    </div>
  );
}
