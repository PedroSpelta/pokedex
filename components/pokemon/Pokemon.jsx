import React, { useState } from "react";
import Statusbar from "./Statusbar";

const elementDic = {
  grass: {
    color: "#78C850aa",
    img: "https://cdn2.bulbagarden.net/upload/thumb/2/2e/Grass-attack.png/20px-Grass-attack.png",
  },
  fire: {
    color: "#E24242aa",
    img: "https://cdn2.bulbagarden.net/upload/thumb/a/ad/Fire-attack.png/20px-Fire-attack.png",
  },
  water: {
    color: "#5BC7E5aa",
    img: "https://cdn2.bulbagarden.net/upload/thumb/1/11/Water-attack.png/20px-Water-attack.png",
  },
  normal: {
    color: "#E5D6D0aa",
    img: "https://cdn2.bulbagarden.net/upload/thumb/1/1d/Colorless-attack.png/20px-Colorless-attack.png",
  },
  bug: {
    color: "#A8B820aa",
    img: "https://cdn2.bulbagarden.net/upload/thumb/2/2e/Grass-attack.png/20px-Grass-attack.png",
  },
};

function Pokemon({ name, number, img, type1 }) {
  const typeColor = elementDic[type1].color;
  const typeImg = elementDic[type1].img;
  const [hover, setHover] = useState(false);
  return (
    <div>
      <div
        className=" w-[220px] h-[300px] border-8 border-yellow-300 bg-yellow-300 rounded-lg overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          zIndex: hover ? 10 : 0,
          transitionDuration: "0.4s",
          transform: hover ? "scale(1.5)" : "",
        }}
      >
        <div
          className=" h-full w-full rounded-[4px]"
          style={{ backgroundImage: "url(/cloudydraw.jpg)" }}
        >
          <div className={`h-full`} style={{ backgroundColor: typeColor }}>
            {/* header */}
            <div className="flex justify-between">
              <p className="inline font-bold">
                {number + " " + name[0].toUpperCase() + name.slice(1)}
              </p>
              <p className="flex items-end">
                <span className="text-[9px]">hp</span>
                <span className="font-bold text-base leading-5">100</span>
                <img className="inline" src={typeImg} alt="" />
              </p>
            </div>
            {/* pokemon image */}
            <div
              className="flex justify-center mx-2 border-gray-300 border-2"
              style={{
                backgroundImage: "url(/background.png)",
                backgroundSize: "contain",
              }}
            >
              <img src={img} alt={name} className="h-[110px]" />
            </div>

            {/* status bar */}
            <div className="flex flex-col justify-center items-center">
              <Statusbar name="HP" color="red" value={200}/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
