import React, { Dispatch, ReactNode, useReducer } from "react";

type actionType = "ADD" | "SUB" | "RESET";

// dispatch({type: 'ADD'})
// ADD 1
// ADD 2
// ADD 3
// SUB 2
//

const countReducer = (state: number, action: { type: actionType }) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUB":
      return state - 1;
    case "RESET":
      return 0;
    default:
      throw new Error();
  }
};

let initialState = 0;
export const GlobalContext = React.createContext<{
  count: number;
  dispatch: Dispatch<{ type: actionType }>;
}>({ count: initialState, dispatch: () => null });

function ContextProvider({ children }: { children: ReactNode }) {
  const [count, dispatch] = useReducer(countReducer, initialState);
  return (
    <GlobalContext.Provider value={{ count, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextProvider;
