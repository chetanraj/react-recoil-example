import React from "react";
import { useRecoilState } from "recoil";

//! State
import { nameStateAtom } from "../state";

export default function Input() {
  const [name, setName] = useRecoilState(nameStateAtom);

  const onChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="input">
      <input placeholder="Enter name" type="text" value={name} onChange={onChange} /><br />
      <div className="comment">
          The state is shared using <a href="https://recoiljs.org/">recoil</a>
      </div>
    </div>
  );
}
