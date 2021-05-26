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
            {/* <select>
              <option data-display="All">All</option>
              <option value="1">Some option</option>
              <option value="2">Another option</option>
              <option value="3">A disabled option</option>
              <option value="4">Potato</option>
            </select> */}
            <div style={{ width: "70%", marginRight: "1rem" }}>
              <InputDropdown
                options={[
                  { value: "all", label: "All" },
                  { value: "1", label: "Some option" },
                  { value: "2", label: "Another option" },
                  { value: "3", label: "A Disabled option" },
                  { value: "4", label: "Potato" },
                ]}
              />
            </div>

            <button type="submit">Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
