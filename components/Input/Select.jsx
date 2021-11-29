import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {elementDic} from '../../data/typeData.js'

const types = [
  { id: 8, name: "All" },
  { id: 1, name: "Grass" },
  { id: 2, name: "Poison" },
  { id: 3, name: "Fire" },
  { id: 4, name: "Flying" },
  { id: 5, name: "Water" },
  { id: 6, name: "Bug" },
  { id: 7, name: "Normal" },
];
function Select({selected, setSelected}) {
  return (
    <div className="w-24 mt-4">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="bg-white w-full rounded-lg shadow-md text-left pl-2">
            {selected}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={`scroll absolute w-full bg-white rounded-md mt-4 max-h-40 overflow-auto`} >
              {Object.keys(elementDic).map((type) => (
                <Listbox.Option key={type} value={type} disabled={false} className={({active}) => `${active? 'select-none font-bold text-blue-400' : ''} cursor-default py-1 pr-4`}>
                  {type}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default Select
