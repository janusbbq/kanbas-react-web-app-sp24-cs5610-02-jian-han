import React, { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";

function ParentStateComponent() {
  // Using the useState hook to initialize a state variable named 'counter' with a value of 123.
  // 'setCounter' is the function provided by useState to update the 'counter' state variable.
  const [counter, setCounter] = useState(123);

  // The component returns JSX, which describes the component's UI.
  return (
    <div>
      <h2>Counter {counter}</h2>

      {/* Using the ChildStateComponent and passing it two props: */}
      {/* 'counter' for displaying the current count and 'setCounter' to allow modification of the state. */}
      <ChildStateComponent counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default ParentStateComponent;
