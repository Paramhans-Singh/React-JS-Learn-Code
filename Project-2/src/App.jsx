import { useState } from "react";
// we have usestate, useEffect, useReducer, useContext, useRef which are hooks
import "./App.css";

function App() {
  // const counter = 5;
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter >= 20) return;
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React Chai !!</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </>
  );
}

export default App;
