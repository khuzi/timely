import React from "react";
import Select from "react-select";

export function InputDropdown({ options }) {
  return (
    <Select
      defaultValue={options[0]}
      name="colors"
      className="basic-single"
      classNamePrefix="select"
      options={options}
    />
  );
}
