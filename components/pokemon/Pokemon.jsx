import React from "react";

function Pokemon({name, number, img}) {
  return (
    <div>
      <div className=" w-[220px] h-[300px] border-8 border-yellow-300 bg-yellow-300 rounded-lg overflow-hidden">
        <div
          className=" h-full w-full rounded-[4px]"
          style={{ backgroundImage: "url(/cloudydraw.png)" }}
        >
          <div className="bg-red-500 bg-opacity-50 h-full">

          <div className="relative">
            <p className="inline">{number}</p>
            <p className="inline">{name}</p>
            <p className="inline absolute right-0">HP</p>
          </div>
          <div className="flex justify-center bg-white mx-4">
            <img
              src={img}
              alt={name}
              className="h-[140px]"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
