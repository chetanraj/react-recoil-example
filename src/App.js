import React from "react";
import { RecoilRoot } from "recoil";

import "./App.css";

import Left from "./components/Input";
import Right from "./components/Name";

function App() {
  return (
    <RecoilRoot>
      <div className="container">
        <Left />
        <Right />
      </div>
    </RecoilRoot>
  );
}

export default App;
