import React from "react";
import { GlobalContext } from "./GlobalContext";

function Child2() {
  const { count, dispatch } = React.useContext(GlobalContext);
  return (
    <div>
      Child 2
      <br />
      {count}
      <br />
      <button onClick={() => dispatch({ type: "SUB" })}>-</button>
    </div>
  );
}

export default Child2;
