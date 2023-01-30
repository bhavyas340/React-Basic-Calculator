import React from "react";
import { render } from "react-dom";
import "./styles.css";
import New from "./New";

export default function App() {
  return (
    <div className="App">
      <hr></hr>
      <h1 style={{ backgroundColor: "orange" }}>Calculator</h1>
      {/* <h1>{this.state.start}</h1> */}
      <New />
      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
