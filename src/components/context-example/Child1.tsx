import React from "react";
import { GlobalContext } from "./GlobalContext";

function Child1() {
  const { count, dispatch } = React.useContext(GlobalContext);
  return (
    <div>
      Child 1
      <br />
      {count}
      <br />
      <button onClick={() => dispatch({ type: "ADD" })}>+</button>
    </div>
  );
}

export default Child1;
