import React from "react";

import { InputDropdown } from "../../shared";

export function MakeAnnouncements() {
  return (
    <div className="make-area">
      <div className="section-title">
        <h3>Make an announcement</h3>
      </div>
      <div className="make-form">
        <div className="make-title">
          <h3>Title</h3>
        </div>
        <div className="make-input">
          <input type="text" placeholder="title of announcement" />
        </div>
        <div className="make-input">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message..."
          ></textarea>
        </div>
      </div>
      <div className="make-form">
        <div className="make-title">
          <h3>Send to</h3>
        </div>
        <div className="make-send">
          <div className="make-select">
            <InputDropdown val1="all" lbl1="All" width="70%" />
            <button type="submit">Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
