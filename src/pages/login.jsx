import React from "react";

export function Login() {
  return (
    <div className="login-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="login-containt">
              <div className="login-title">
                <h3>
                  Welcome back to the <br />
                  Timely <span>Platform</span>
                </h3>
              </div>
              <div className="login-form">
                <div className="login-form-title">
                  <h3>Sign In</h3>
                </div>
                <div className="login-in-foem">
                  <div className="single-login-input">
                    <input type="tel" placeholder="Tenant number" />
                  </div>
                  <div className="single-login-input">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="single-login-input">
                    <input type="password" placeholder="Password" />
                  </div>
                  <div className="login-form-check">
                    <label className="container-ck">
                      Remember me
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <a href="/">Forgot password?</a>
                  </div>
                  <div className="login-form-btn">
                    <button type="submit">Continue</button>
                  </div>
                  <div className="login-reg">
                    <p>Do not have an account?</p>
                    <a href="/">Register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
