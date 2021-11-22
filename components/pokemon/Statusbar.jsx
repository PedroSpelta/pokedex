import React from "react";

function Statusbar({ name, value, color }) {
  const percentage = Math.round((value / 255) * 100).toString() + "%";
  return (
    <div className={`w-4/6 bg-${color}-300 relative`}>
      <div
        className={`bg-${color}-600 h-5 flex justify-between items-center`}
        style={{ width: percentage }}
      >
        <span className="font-semibold">{name}</span>
      </div>
      <span className="inline absolute right-1 top-0 font-semibold leading-5">
        {value}
      </span>
    </div>
  );
}

export default Statusbar;
