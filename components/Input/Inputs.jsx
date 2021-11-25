import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

const types = [
  { id: 1, name: "Grass" },
  { id: 2, name: "Poison" },
  { id: 3, name: "Fire" },
  { id: 4, name: "Flying" },
  { id: 5, name: "Water" },
  { id: 6, name: "Bug" },
  { id: 7, name: "Normal" },
  { id: 8, name: "All" },
];

function Inputs() {
  const [selected, setSelected] = useState(types[0]);

  return (
    <div className="w-24 absolute">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="bg-white w-full rounded-t-lg shadow-md text-left pl-2">
            {selected.name}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={`scroll absolute w-full bg-white rounded-b-md max-h-40 overflow-auto`} >
              {types.map((type) => (
                <Listbox.Option key={type.id} value={type} disabled={false} className={({active}) => `${active? 'select-none font-bold text-blue-400' : ''} cursor-default py-1 pr-4`}>
                  {type.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default Inputs;
