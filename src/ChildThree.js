import React from "react";
import "./App.css";
import {useRecoilValue} from "recoil";
import { displayText, displaySelector } from "./ChildOne";

function ChildThree(props) {
    const display = useRecoilValue(displayText);
    const text = useRecoilValue(displaySelector)
  return (
    <div className="ChildThree" style={props.childStyle}>
        <p>Three: {text}</p>
    </div>
  );
}

export default ChildThree;
