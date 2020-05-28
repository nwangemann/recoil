import React from "react";
import "./App.css";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import ChildThree from "./ChildThree";

const childStyle = {width: "25vw",height: "40vh",backgroundColor: "#2E0854",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",color: "#FFFFFF",
};

function Parent() {
  return (
    <div
      className="Parent"
      style={{width: "90vw",height: "80vh",backgroundColor: "#daa520",display: "flex",justifyContent: "space-around",alignItems: "center",}}>
      <ChildOne childStyle={childStyle} />
      <ChildTwo childStyle={childStyle} />
      <ChildThree childStyle={childStyle} />
    </div>
  );
}

export default Parent;
