import React from "react";
import "./App.css";
import {useRecoilState, atom, selector} from "recoil";

export const displayText = atom({
    key: 'displayText',
    default: 'This is the default'
});

export const displaySelector = selector({
    key: "displaySelector",
    get: ({get}) => 
    {
        const text = get(displayText)
        return text.repeat(5) + " -- this is with the selector logic too"
    }
});


function ChildOne(props) {
  const [name, setName] = useRecoilState(displayText);

  return (
    <div className="ChildOne" style={props.childStyle}>
      <input type="text" onChange={e => setName(e.target.value)} />
      <p>Echo: {name}</p>
    </div>
  );
}

export default ChildOne;
