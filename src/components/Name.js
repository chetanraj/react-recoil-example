import React from "react";
import { useRecoilValue } from "recoil";

//! State
import { nameStateSelector } from "../state";

export default function Name() {
  const count = useRecoilValue(nameStateSelector);

  return <div className="name">My name is {count}</div>;
}
