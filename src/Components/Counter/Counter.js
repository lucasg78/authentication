import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Counter.scss";

const Counter = () => {
  const initialState = 0; // Estado inicial
  const [count, setCount] = useState(initialState);

  const handleClick = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(initialState);
  };

  return (
    <div>
      <p>
        You clicked <p style={{ fontSize: "100px" }}>{count}</p> times
      </p>
      <Button variant="primary" className="btn my-5" onClick={handleClick}>
        Click me
      </Button>
      <Button variant="danger" onClick={resetCount}>
        Reset
      </Button>
    </div>
  );
};

export default Counter;
