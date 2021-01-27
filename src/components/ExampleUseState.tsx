import React, { useState, useEffect, useRef } from "react";

// Requirements
// 1. We need a special variable which triggers the rerender of component.
// 2. We need a special variable that persists among rerenders.

// 3. I want a persistent variable and I do not want to trigger the rerender.

let c = 0;

function ExampleUseState() {
  console.log(`-------`);

  let a = 0;
  const incA = () => {
    a++;
    console.log(`a value changed ${a}`);
  };

  const [b, setB] = useState(0);

  const incB = () => {
    setB((b) => b + 1);
    console.log(`b value changed ${b}`);
  };

  const incC = () => {
    c++;
    console.log(`c value changed ${c}`);
  };

  const d = useRef(0);
  const incD = () => {
    d.current++;
    console.log(`d value changed ${d.current}`);
  };

  useEffect(() => {
    console.log(`a value ${a} b value ${b} c value ${c} d value: ${d.current}`);
  });

  return (
    <div className="App">
      <div>Let value</div>
      <div id="aValue">a value {a}</div>
      <button onClick={incA}>+</button>
      <br />
      <br />
      <div>useState value</div>
      <div>b value {b}</div>
      <button onClick={incB}>+</button>
      <br />
      <br />
      <div>outer context value</div>
      <div>c value {c}</div>
      <button onClick={incC}>+</button>
      <br />
      <br />
      <div>useRef value</div>
      <div>d value {d.current}</div>
      <button onClick={incD}>+</button>
      <br />

      {/* // Print length of array */}
    </div>
  );
}

export default ExampleUseState;
