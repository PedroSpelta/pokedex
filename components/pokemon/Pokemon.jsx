import React, { useState } from "react";
import Statusbar from "./Statusbar";
import Typebar from "./Typebar";

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
  poison: {
    color: "#A65E9Aaa",
    img: "https://cdn2.bulbagarden.net/upload/thumb/e/ef/Psychic-attack.png/20px-Psychic-attack.png"
  },
  flying: {
    color: "#E5D6D0aa",
    img: "https://cdn2.bulbagarden.net/upload/thumb/1/1d/Colorless-attack.png/20px-Colorless-attack.png"
  },
};

function Pokemon({
  name,
  number,
  img,
  type1,
  type2,
  atk,
  def,
  spatk,
  spdef,
  spd,
  hp,
  height,
  weight
}) {
  const typeColor = elementDic[type1].color;
  const typeImg = elementDic[type1].img;
  const typeImg2 = type2 ? elementDic[type2].img : false;
  const [hover, setHover] = useState(false);
  return (
    <div>
      <div
        className=" w-[220px] h-[300px] border-8 border-yellow-300 bg-yellow-300 rounded-lg relative overflow-hidden"
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
                <img className="inline" src={typeImg} alt="" />
                { typeImg2 && typeImg2!==typeImg && <img className="inline" src={typeImg2} alt="" />}
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

            {/* weight and height */}

            <div className="flex justify-center divide-x-[1px] divide-black text-xs font-semibold mt-2" >
              <p className="pr-2">Weight: {weight/10}kg</p>
              <p className="pl-2">Height: {height/10}m</p>
            </div>

            {/* tpye bar */}

            <Typebar type1={type1} type2={type2}/>

            {/* status bar */}
            <div className="flex flex-col justify-center items-center scale-75">
              <Statusbar name="HP" backColor="#FF5959" frontColor="#FF0000" value={hp} />
              <Statusbar name="ATK" backColor="#F5AC78" frontColor="#F08030" value={atk} />
              <Statusbar name="DEF" backColor="#FAE078" frontColor="#F8D030" value={def} />
              <Statusbar name="SP.ATK" backColor="#9DB7F5" frontColor="#6890F0" value={spatk} />
              <Statusbar name="SP.DEF" backColor="#A7DB8D" frontColor="#78C850" value={spdef} />
              <Statusbar name="SPD" backColor="#FA92B2" frontColor="#F85888" value={spd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
