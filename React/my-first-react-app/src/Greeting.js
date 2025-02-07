import React from "react";
import { useState } from "react";

function Greeting(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>
        {props.name} has clicked {count} times.
      </p>
      <button onClick={() => setCount(count + 1)}> Click me </button>
    </div>
  );
}

export default Greeting;
