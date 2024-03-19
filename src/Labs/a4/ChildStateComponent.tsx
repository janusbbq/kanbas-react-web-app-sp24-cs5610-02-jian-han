import React from "react";
// This component accepts props `counter` and `setCounter` destructured from its props object.
function ChildStateComponent({
  counter,
  setCounter,
}: {
  // `counter` is a prop of type number. It represents the current value of the counter.
  counter: number;
  // `setCounter` is a function prop that takes a number and returns void. It's used to update the counter's value.
  setCounter: (counter: number) => void;
}) {
  return (
    // Returns a JSX element
    <div>
      {/* Displays the current value of `counter` within an <h3> element */}
      <h3>Counter {counter}</h3>
      {/* A button that, when clicked, will increment the counter by 1 */}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      {/* A button that, when clicked, will decrement the counter by 1 */}
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}

export default ChildStateComponent;
