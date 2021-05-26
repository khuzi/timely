import React from "react";
import Slider from "react-slick";

import arrow from "../../../../assets/img/up-d-arrow.png";

export const TableHead = ({ none }) => {
  if (none) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <thead>
        <tr>
          <th scope="col">
            <div className="time-table-top">
              <a href="/time1">
                Employee <img src="assets/img/up-d-arrow.png" alt="" />
              </a>
            </div>
          </th>
          <th scope="col">
            <div className="time-table-top tine-tab-slider">
              <Slider {...settings}>
                {["Mon", "Tue", "Wed", "Thus", "Fri", "Sat", "Sun"].map(
                  (thd, i) => (
                    <div key={i}>
                      <h3 className={i === 0 && "accttive aa2"}>
                        {thd} <span>{i + 3}</span>
                      </h3>
                    </div>
                  )
                )}
              </Slider>
            </div>
          </th>
          <th scope="col">
            <div className="time-table-top tdf">
              <a href="/time1">
                (Hr) <img src={arrow} alt="" />
              </a>
            </div>
          </th>
          <th scope="col">
            <div className="time-table-top tr2">
              <a href="/time1">Act</a>
            </div>
          </th>
        </tr>
      </thead>
    );
  } else {
    return (
      <thead>
        <tr>
          <th scope="col" className="pdd"></th>
          {["Employeee", "Designation"].map((thd) => (
            <th scope="col">
              <div className="time-table-top">
                <a href="/time1">
                  {thd} <img src={arrow} alt="" />
                </a>
              </div>
            </th>
          ))}
          {["Mon", "Tue", "Wed", "Thus", "Fri", "Sat", "Sun"].map((thd, i) => (
            <th key={i} scope="col">
              <div className="time-table-top">
                <h3 className={i === 0 && "accttive"}>
                  {thd}
                  <span>{i + 3}</span>
                </h3>
              </div>
            </th>
          ))}
          <th scope="col">
            <div class="time-table-top">
              <a href="/time1">
                Workload (Hr) <img src={arrow} alt="" />
              </a>
            </div>
          </th>
          <th scope="col">
            <div className="time-table-top tr">
              <a href="/time1">Actions</a>
            </div>
          </th>
        </tr>
      </thead>
    );
  }
};
