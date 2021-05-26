import React from "react";
import Slider from "react-slick";

export function Latestannouncements({ none }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={`latest-area ${none && "d-none"}`}>
      <div className="section-title">
        <h3>Latest announcements</h3>
      </div>
      <div className="latest-slider owl-carousel">
        <Slider {...settings}>
          {[1, 2, 3].map((slide) => (
            <div key={slide} className="letest-single">
              <div className="latest-single-title">
                <h3>Emergency Meeting</h3>
              </div>
              <div className="lstest-single-text">
                <p>
                  Hi Developers! Here is a good news for all of us. The company
                  has been assigned with a new big project. Its a 90 days task.
                  I'll see my development team in the meeting hall tomorrow by
                  12 pm.
                  <a href="/">Show more</a>
                </p>
              </div>
              <div className="latest-single-last">
                <a href="/">Development Dpt</a>
                <p>March 02, 2021, 09:30 am</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
