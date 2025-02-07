import React from "react";

function Greeting(props) {
  const [count,setCount] = useState(0); 
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>You've clicked {count} times.</p>
      <button onClick={()=> setCount(count+1)}> Click me </button>
    </div>
  );
}

export default Greeting;
