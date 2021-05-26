import React from "react";

const data = [
  "Rose Bush",
  "Bridget Theriveaquai",
  "Lynne Gwistic",
  "Bridget Theriveaquai",
  "Rose Bush",
  "Col Fays",
  "Bridget Theriveaquai",
  "Lynne Gwistic",
  "Bridget Theriveaquai",
];

export function TableBody({ none }) {
  if (none) {
    return (
      <tbody>
        {data.map((cellBody, i) => (
          <tr key={i}>
            <td>
              <div className="time-pluse pp2">
                <a href="/time1">
                  <i className="fas fa-plus-circle"></i>
                  Rose Bush
                </a>
              </div>
            </td>
            <td className="text-center">09~14</td>
            <td>
              <div className={`time-table-btn ${i % 2 !== 0 && "d2"}`}>
                <a href="/time1">42</a>
              </div>
            </td>
            <td>
              <div className="time-table-dot">
                <a href="/time1">
                  <i className="far fa-ellipsis-h"></i>
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  } else {
    return (
      <tbody>
        {data.map((cellBody, i) => (
          <tr key={i}>
            <td className="pdd">
              <div className="time-pluse">
                <a href="/time1">
                  <i className="fas fa-plus-circle"></i>
                </a>
              </div>
            </td>
            <td>{cellBody}</td>
            <td>Team Manager</td>
            <td>09~14</td>
            <td>09~14</td>
            <td>.</td>
            <td>09~14</td>
            <td>09~14</td>
            <td>09~14</td>
            <td>09~14</td>
            <td>
              <div className={`time-table-btn ${i % 2 !== 0 && "d2"}`}>
                <a href="/time1">42</a>
              </div>
            </td>
            <td>
              <div className="time-table-dot">
                <a href="/time1">
                  <i className="far fa-ellipsis-h"></i>
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}
