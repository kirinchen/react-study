import React, { useState } from "react";

import Count from "./Count";
import Button from "./Button";

function App() {
  let [count, setCount] = useState(0);
  const inc = () => setCount((prevCount) => prevCount + 1);
  const desc = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="App">
      <Count count={count} />
      <Button handleCallBack={desc}>-</Button>
      <Button handleCallBack={inc}>+</Button>
    </div>
  );
}

export default App;
