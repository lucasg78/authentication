import React, { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./Components/Auth/Auth";
import Counter from "./Components/Counter/Counter";

function App() {

  const [show, setShow] = useState(true)

  const showCounter = () => {
    setShow(!show)
  }

  return (
    <div className="App">
      <Auth />
      <button className="btn btn-primary" onClick={showCounter}>SHOW/HIDE</button>

      {
        show ?
          <div className="counter-title">
            <h2 style={{ fontSize: "50px" }}>Counter</h2>
            <Counter />
          </div>
          :
          <div></div>
      }
    </div>
  );
}

export default App;
