import React, { useEffect, useState } from "react";

// Requirements. I need to run a piece of code
// 1. after each rerender.
// 2. only after the first rerender.
// 3. only after certain state/prop changes.
// 4. Cleanup

function ExampleUseEffect() {
  console.log("----Execution starts------");

  const [x, setX] = useState(0);
  const [dep, setDep] = useState(0);
  const [timer, setTimer] = useState(0);

  const updateX = () => {
    console.log(`State change happened`);
    setX((x) => x + 1);
  };

  //   #Runs only after certain state/prop changes
  useEffect(() => {
    console.log(`Runs only after certain state/prop changes. ${dep}`);
  }, [dep]);

  //   #2 & #4
  useEffect(() => {
    console.log(`-------Runs only after first render-------`);
    const timerId = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      console.log(`Component unmounted`);
      clearInterval(timerId);
    };
  }, []);

  // #1
  useEffect(() => {
    console.log(`-------Runs after each rerender-------`);
  });
  console.log("----Execution ends------");

  return (
    <div>
      {console.log("JSX execution starts")}
      <div>{x}</div>
      <button onClick={updateX}>+</button>
      <button onClick={() => setDep((d) => d + 2)}>changeDep</button>
      <br />
      <div>{timer}</div>

      {console.log("JSX execution ends")}
    </div>
  );
}

const Wrapper = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <ExampleUseEffect />}
      <button onClick={() => setShow((show) => !show)}>toggle</button>
    </>
  );
};

export default Wrapper;
