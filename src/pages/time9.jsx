import React from "react";

import promot from "../assets/img/promot-icon.png";

export function Time9() {
  return (
    <>
      <div className="profile-top-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="profile-top-containt">
                <h3>Profile</h3>
                <a href="/time9" className="theme-btn bbn">
                  Edit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="satting-area-fl">
                <div className="satting-left">
                  <div className="satting-time">
                    <div className="section-title">
                      <h3>General settings</h3>
                    </div>
                    <div className="satting-time-for">
                      <div className="satting-time-for-containt">
                        <h3>Time format</h3>
                        <p>
                          Select a time format of your preference for the
                          schedule tables.
                        </p>
                      </div>
                    </div>
                    <div className="satting-toog">
                      <div className="satting-single-toog">
                        <h3>12 H (E.g. 5:30 pm)</h3>
                        <ul className="switch_common d_inline">
                          <li className="sm_switch">
                            <input
                              className="switch"
                              id="switch9"
                              type="checkbox"
                            />
                            <label for="switch9"></label>
                          </li>
                        </ul>
                      </div>
                      <div className="satting-single-toog">
                        <h3>12 H (E.g. 5:30 pm)</h3>
                        <ul className="switch_common d_inline">
                          <li className="sm_switch">
                            <input
                              className="switch"
                              id="switch10"
                              type="checkbox"
                            />
                            <label for="switch10"></label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="satting-time-for">
                      <div className="satting-time-for-containt">
                        <h3>Account security</h3>
                        <p>
                          Your account is being used on the following devices.
                          Consider logging out on the that you don't recognize!
                        </p>
                      </div>
                    </div>
                    <div className="satting-logu">
                      <div className="single-satting-logu">
                        <div className="satting-logu-left">
                          <h3>Desktop, Windows 10</h3>
                          <p>
                            Last active: <span>Now</span>
                          </p>
                        </div>
                        <div className="satting-logu-ri">
                          <a href="/time9">Logout</a>
                        </div>
                      </div>
                      <div className="single-satting-logu">
                        <div className="satting-logu-left">
                          <h3>Desktop, Windows 10</h3>
                          <p>
                            Last active: <span>Now</span>
                          </p>
                        </div>
                        <div className="satting-logu-ri">
                          <a href="/time9">Logout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="satting-mid">
                  <div className="satting-mid-left">
                    <div className="section-title">
                      <h3>Change password</h3>
                    </div>
                    <div className="satting-form">
                      <div className="add-em-form-single">
                        <label for="#">Current password</label>
                        <input type="password" placeholder="Current password" />
                      </div>
                      <div className="add-em-form-single">
                        <label for="#">New password</label>
                        <input type="password" placeholder="New password" />
                      </div>
                      <div className="add-em-form-single">
                        <label for="#">Confirm password</label>
                        <input type="password" placeholder="Confirm password" />
                      </div>
                    </div>
                  </div>
                  <div className="satting-mid-left-ri">
                    <div className="section-title">
                      <h3>Payment method</h3>
                    </div>
                    <div className="satting-form">
                      <div className="satting-form-fl">
                        <div className="add-em-form-single">
                          <label for="#">Name on card</label>
                          <input type="text" placeholder="Name on card" />
                        </div>
                        <div className="add-em-form-single">
                          <label for="#">Card number</label>
                          <input type="tel" placeholder="Card number" />
                        </div>
                      </div>
                      <div className="satting-form-fl">
                        <div className="add-em-form-single">
                          <label for="#">Expiry</label>
                          <input type="text" placeholder="Expiry" />
                        </div>
                        <div className="add-em-form-single">
                          <label for="#">CVV</label>
                          <input type="password" placeholder="CVV" />
                        </div>
                      </div>
                    </div>
                    <div className="add-satting-btn">
                      <a href="/time9">
                        <i className="fal fa-plus"></i>Add new payment method
                      </a>
                    </div>
                  </div>
                </div>
                <div className="satting-right">
                  <div className="profile-plan-fl">
                    <h3>
                      <img src={promot} alt="" />
                      Upgrade your plan
                    </h3>
                    <p>
                      Dear customer! We have noticed that you're currently using
                      our basic plan. And you can only register up to 50
                      employees. To get unlimited access,{" "}
                      <a href="/time9">see our plans</a> to do more with Timely.{" "}
                    </p>
                  </div>
                  <div className="satting-ri-plan">
                    <h3>
                      Current plan <span>Basic</span>
                    </h3>
                    <div className="satting-plan-text">
                      <h3>Register up to 50 employees</h3>
                      <p>
                        Upcoming payment on: <span>Never</span>
                      </p>
                    </div>
                  </div>
                  <div className="satting-updeted-last">
                    <div className="sattinng-updeted-top">
                      <h3>Upgrade to</h3>
                      <a href="/time9">Learn about our plans</a>
                    </div>
                    <div className="satting-updeted-btn">
                      <a href="/time9">Standard Plan</a>
                      <a href="/time9" className="plan-btnn">
                        Pro Plan
                      </a>
                    </div>
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
