import React from "react";

import ContextProvider from "./GlobalContext";

import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

function ExampleUseContext() {
  return (
    <ContextProvider>
      <Child1 />
      <Child2 />
      <Child3 />
    </ContextProvider>
  );
}

export default ExampleUseContext;
