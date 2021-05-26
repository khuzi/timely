import React from "react";

import { TimeSelect, InputDropdown } from "../components";
import bar from "../assets/img/a-bar.png";

export function Time6() {
  return (
    <>
      <div class="anno-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="annor-fl-area">
                <div class="anno-title">
                  <h3>Announcements</h3>
                  <p>Keep track of all of your announcements</p>
                </div>
                <div class="anno-show">
                  <div class="anno-bar">
                    <a href="/time6">
                      <img src={bar} alt="" />
                    </a>
                  </div>
                  <TimeSelect none />
                  <TimeSelect />
                </div>
                <div class="anno-ruselt">
                  <p>
                    Results found <span>(28)</span>
                  </p>
                </div>
                <div class="emar-area">
                  {[1, 2, 3, 4].map((key) => (
                    <div key={key} class="emar-single-fl">
                      <div class="emar-single-top">
                        <h3>Emergency Meeting</h3>
                        <a href="/time6">
                          <i class="far fa-ellipsis-h"></i>
                        </a>
                      </div>
                      <div class="emar-single-mid">
                        <p>
                          Hi Developers! Here is a good news for all of us. The
                          company has been assigned with a new big project. Its
                          a 90 days task. I'll see my development team in the
                          meeting hall tomorrow by 12 pm.
                        </p>
                      </div>
                      <div class="emar-single-last">
                        <p>March 02, 2021, 09:30 am</p>
                        <a href="/time6">Development Dpt</a>
                      </div>
                    </div>
                  ))}
                </div>
                <div class="time-last-list">
                  <div class="time-lastlist-left">
                    <h3>Show entries</h3>
                    <InputDropdown val1="10" lbl1="10" width="150px" />
                  </div>
                  <div class="time-last-list-ri">
                    <a href="/time6">1</a>
                    <a href="/time6">2</a>
                    <a href="/time6">3</a>
                    <a href="/time6">4</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
