import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col" className="pdd"></th>
        {["Employeee", "Designation"].map((thd) => (
          <th scope="col">
            <div class="time-table-top">
              <a href="/time1">
                {thd} <img src="assets/img/up-d-arrow.png" alt="" />
              </a>
            </div>
          </th>
        ))}
        {["Mon", "Tue", "Wed", "Thus", "Fri", "Sat", "Sun"].map((thd, i) => (
          <th scope="col">
            <div className="time-table-top">
              <h3 className={i === 0 && "accttive"}>
                {thd}
                <span>{i + 3}</span>
              </h3>
            </div>
          </th>
        ))}
        <th scope="col">
          <div class="time-table-top tr">
            <a href="/time1">Actions</a>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export function Time1Table() {
  return (
    <div class="tim-table-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="time-table">
              <table class="table">
                <TableHead />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
