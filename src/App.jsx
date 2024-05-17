import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [increase, setIncrease] = useState(0);
  const [login, setLogin] = useState(false);

  const changeLogin = () => {
    setLogin(!login);
  };

  const handleClick = () => {
    increase ? setCount(count + increase) : setCount(count + 1);
  };

  const handleIncrease = () => {
    setIncrease(increase + 1);
  };
  return (
    <>
      <div className="card">
        <h1>Task 1</h1>
        <h1> {count} qadam🚶‍♂️</h1>
        <button onClick={handleClick}>Yurish</button>
        <button onClick={() => setCount((count) => (count = 0))}>reset</button>

        <div>
          <h1>Qadam kattaligi: {increase} metr🏃‍♂️</h1>
          <button onClick={handleIncrease}>Qadamni kattalashtirish</button>
          <button onClick={() => setIncrease((increase) => (increase = 0))}>
            reset
          </button>
        </div>
      </div>

      <div className="border"></div>
      <div className="login">
        <h1>Task 2</h1>
        <button onClick={changeLogin}>Login</button>
        {login ? <h1>login</h1> : <h1>Salom mening ismim Kamronbek😊</h1>}
      </div>
      <div className="border"></div>
    </>
  );
}

export default App;
