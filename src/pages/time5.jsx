import React from "react";

import { InputDropdown } from "../components";
import cLogo from "../assets/img/c-logo.png";

export function Time5() {
  return (
    <>
      <div className="profile-top-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="profile-top-containt">
                <h3>Profile</h3>
                <a href="/time5" className="theme-btn bbn">
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
              <div className="profile-area-fl">
                <div className="profile-left">
                  <div className="company-area profile-company">
                    <div className="section-title">
                      <h3>Company</h3>
                    </div>
                    <div className="company-good-fl">
                      <div className="company-logo">
                        <img src={cLogo} alt="" />
                        <a href="/time5" className="pllu">
                          <i className="fas fa-plus-circle"></i>
                        </a>
                      </div>
                      <div className="company-good-text">
                        <span>Good Evening</span>
                        <h3>Batalian Graphics</h3>
                        <p>
                          Plan: Basic <a href="/time5">Upgrade</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="profile-plan-fl">
                    <h3>
                      <img src="assets/img/promot-icon.png" alt="" />
                      Upgrade your plan
                    </h3>
                    <p>
                      Dear customer! We have noticed that you're currently using
                      our basic plan. And you can only register up to 50
                      employees. To get unlimited access,{" "}
                      <a href="/time5">see our plans</a> to do more with Timely.{" "}
                    </p>
                  </div>
                </div>
                <div className="profile-mid">
                  <div className="section-title">
                    <h3>CEO Info (Account holder)</h3>
                  </div>
                  <div className="peofile-form">
                    <div className="single-prifile-form-fl">
                      <div className="add-em-form-single">
                        <label for="#">First name</label>
                        <input type="text" placeholder="First name" />
                      </div>
                      <div className="add-em-form-single">
                        <label for="#">Last name</label>
                        <input type="text" placeholder="Last name" />
                      </div>
                    </div>
                    <div className="single-prifile-form-fl wdd">
                      <div className="add-em-form-single">
                        <label for="#">Address</label>
                        <input type="text" placeholder="Address" />
                      </div>
                    </div>
                    <div className="single-prifile-form-fl">
                      <div className="add-em-form-single">
                        <label for="#">City</label>
                        <input type="text" placeholder="City" />
                      </div>
                      <div className="add-em-form-single">
                        <label for="#">State</label>
                        <InputDropdown val1="all" lbl1="All" width="95%" />
                      </div>
                    </div>
                    <div className="single-prifile-form-fl">
                      <div className="add-em-form-single">
                        <label for="#">Email</label>
                        <input type="email" placeholder="Email" />
                      </div>
                      <div className="add-em-form-single">
                        <label for="#">Phone</label>
                        <input type="text" placeholder="Phone" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-mid">
                  <div className="section-title">
                    <h3>Company info</h3>
                  </div>
                  <div className="peofile-form">
                    <div className="single-prifile-form-fl">
                      <div className="add-em-form-single">
                        <label for="#">Company name</label>
                        <input type="text" placeholder="Company name" />
                      </div>
                      <div className="add-em-form-single">
                        <label for="#">Time zone</label>
                        <InputDropdown val1="utc+1" lbl1="UTC +1" width="95%" />
                      </div>
                    </div>
                    <div className="single-prifile-form-fl">
                      <div className="add-em-form-single">
                        <label for="#">Tenant code</label>
                        <input type="text" placeholder="Tenant code" />
                      </div>
                      <div className="add-em-form-single">
                        <label for="#">Secret key</label>
                        <input type="text" placeholder="Secret key" />
                      </div>
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
