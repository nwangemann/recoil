import React from "react";
import "./App.css";
import { useRecoilValue, useRecoilState } from "recoil";
import { displayText } from "./ChildOne";

function ChildTwo(props) {
  const name = useRecoilValue(displayText);
  const [text, setText] = useRecoilState(displayText);

  return (
    <div className="ChildTwo" style={props.childStyle}>
        <input onChange={e => setText(e.target.value)}/>
      <p>Two: {name}</p>
    </div>
  );
}

export default ChildTwo;
