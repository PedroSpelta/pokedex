import React from "react";

function Statusbar({ name, value, backColor, frontColor }) {
  const percentage = Math.round((value / 255) * 100).toString() + "%";
  return (
    <div className={`w-full`} style={{backgroundColor: backColor, position: "relative"}}>
      <div
        className={`h-5 flex justify-between items-center border-r-[1px] border-opacity-10 border-black`}
        style={{ width: percentage, backgroundColor: frontColor }}
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
