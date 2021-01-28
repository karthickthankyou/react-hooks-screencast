import React from "react";
import { GlobalContext } from "./GlobalContext";

function Child3() {
  const { count, dispatch } = React.useContext(GlobalContext);
  return (
    <div>
      Child 3
      <br />
      {count}
      <br />
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
}

export default Child3;
