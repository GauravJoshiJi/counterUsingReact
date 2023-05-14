import React, { useState } from "react";
function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <>
        <div className="counter">
          <h1>
            {" "}
            <u>Simple React Counter</u>
          </h1>
          <h2>{value}</h2>
          <button className="btn" onClick={() => setValue(value + 1)}>
            Incress
          </button>
          <button className="btn" onClick={() => setValue(value - 1)}>
            Decress
          </button>
          <button className="btn" onClick={() => setValue(0)}>
            Reset
          </button>
        </div>
      </>
    </div>
  );
}

export default App;
