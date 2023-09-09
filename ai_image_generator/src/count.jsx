import './App.css';
import React, { useState } from "react";
function Count() {
    const [count, setCount] = useState(10);
    const handleIncrement = () => {
      console.log("Handle increment was called");
      setCount(count + 1);
    }

    const handleDecrement = () => {
      console.log("Handle decrement was called");
      setCount(count - 1);
    }
    return (
        <>
            <button onClick={handleIncrement}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrement}>-</button>

        </>

    )
}
export default Count;
