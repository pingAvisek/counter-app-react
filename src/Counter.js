import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0); // State to store the count value

  // Function to handle the increament, decreament and reset of the count value
  const handleIncreament = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleDecreament = () => {
    setCount(count - 1);
  };

  // Function to change the color of the count value based on the count value

  const changeColor = () => {
    if (count < 0) {
      return "red";
    } else if (count > 0) {
      return "green";
    } else {
      return "black";
    }
  };

  return (
    <main>
      <h1>Counter</h1>
      <p
        className="count-value"
        style={{
          color: changeColor(),
        }}
      >
        {count}
      </p>
      <div className="btns">
        <button onClick={handleDecreament} className="btn btn-secondary">
          Decrease
        </button>
        <button onClick={handleReset} className="btn btn-danger">
          Reset
        </button>
        <button onClick={handleIncreament} className="btn btn-success">
          Increase
        </button>
      </div>
    </main>
  );
};

export default Counter;
