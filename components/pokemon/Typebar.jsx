import React from "react";
import {elementDic} from '../../data/typeData.js'

const colorDic = {
  grass: "#9BCC50",
  fire: "#FD7D24",
  water: "#4592C4",
  normal: "#A4ACAF",
  bug: "#729F3F",
  poison: "#B97FC9",
  flying: "linear-gradient(180deg, #4592C4 50%, #A4ACAF 50%)",
  ground: "linear-gradient(180deg, #4592C4 50%, #A4ACAF 50%)",
};

function Typebar({ type1, type2 }) {
  return (
    <div className="flex justify-center mt-2 font-semibold">
      <div
        style={{
          backgroundColor: elementDic[type1].typebar,
          backgroundImage: type1.length > 10 ? elementDic[type1].typebar : "",
        }}
        className="rounded-md border-[1.5px] border-black border-opacity-40 w-16 text-sm flex justify-center items-center leading-4"
      >
        {type1[0].toUpperCase() + type1.slice(1)}
      </div>
      {type2 && (
        <div
          style={{
            backgroundColor: elementDic[type2].typebar,
            backgroundImage: elementDic[type2].typebar.length > 10 ? elementDic[type2].typebar : "",
          }}
          className="rounded-md border-[1.5px] border-black border-opacity-40 ml-1 w-16 text-sm flex justify-center items-center  leading-4"
        >
          {type2[0].toUpperCase() + type2.slice(1)}
        </div>
      )}
    </div>
  );
}

export default Typebar;
