import React, { useMemo } from "react";
import Select from "react-select";

export function InputDropdown({ val1, lbl1, width }) {
  const options = useMemo(
    () => [
      { value: val1, label: lbl1 },
      { value: "1", label: "Some option" },
      { value: "2", label: "Another option" },
      { value: "3", label: "A Disabled option" },
      { value: "4", label: "Potato" },
    ],
    [val1, lbl1]
  );
  return (
    <div style={{ width: width, margin: "0 0.5rem 0.5rem" }}>
      <Select
        defaultValue={options[0]}
        name="colors"
        className="basic-single"
        classNamePrefix="select"
        options={options}
      />
    </div>
  );
}
