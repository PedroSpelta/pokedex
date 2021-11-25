import React from "react";

function Emptycard() {
  return (
    <div>
      <div className=" w-[220px] h-[300px] border-8 border-gray-200 bg-gray-200 rounded-lg relative overflow-hidden">
        <div className=" h-full w-full rounded-[4px] animate-pulse duration-200">
          <div className={`h-full`}>
            {/* header */}
            <div className="flex justify-between mt-1 mx-[10px] mb-1">
              <div className="bg-gray-400 w-20 h-5"></div>
              <div className="bg-gray-400 w-5 rounded-full h-5"></div>
            </div>
            {/* pokemon image */}
            <div className="flex justify-center mx-2 border-gray-300 border-2">
              <div className="bg-gray-400 w-[188px] h-[114px]"></div>
            </div>

            {/* weight and height */}

            <div className="flex justify-center divide-black text-xs font-semibold mt-2">
              <div className="bg-gray-400 w-20 h-5 mr-2"></div>
              <div className="bg-gray-400 w-20 h-5 ml-2"></div>
            </div>

            {/* tpye bar */}
            <div className="flex justify-center">
              <div className="bg-gray-400 w-20 mt-2 rounded-md h-5"></div>
            </div>

            {/* status bar */}
            <div className="flex justify-center">

            <div className="bg-gray-400 w-28 h-16 mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emptycard;
