import React from "react";

import { InputDropdown } from "../inputDropdown";

const selectData = [
  {
    val: "this week",
    lbl: "This Week",
  },
  {
    val: "Development Dpt",
    lbl: "development dpt",
  },
  {
    val: "column visibility",
    lbl: "Column Visibility",
  },
];

export function SelectGroup({ width }) {
  return (
    <>
      {selectData.map(({ val, lbl }) => (
        <InputDropdown key={val} val1={val} lbl1={lbl} width={width} />
      ))}
    </>
  );
}
