import React, { useState } from "react";
import { Listbox } from "@headlessui/react";

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
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Button>{selected.name}</Listbox.Button>
      <Listbox.Options>
        {types.map((type) => (
          <Listbox.Option key={type.id} value={type} disabled={false}>
            {type.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

export default Inputs;
