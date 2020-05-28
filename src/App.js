import React from "react";
import Parent from "./Parent";
import "./App.css";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div
        className="App"
        style={{width: "100vw", height: "100vh", backgroundColor: "#5F9F9F", display: "flex", justifyContent: "center", alignItems:"center"}}>
        <Parent />
      </div>
    </RecoilRoot>
  );
}

export default App;
