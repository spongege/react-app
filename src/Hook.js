import React, { useState, useEffect, useContext, useReducer } from "react";

import ThemeContext from "./theme-context";

const initialState = { times: 0, name: "reducer" };
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, times: state.times + 1 };
    case "subtract":
      return { ...state, times: state.times - 1 };
    default:
      return state;
  }
};
const Example = () => {
  const theme = useContext(ThemeContext);
  // useState 的初始值可以是有返回值的函数
  const [count, setCount] = useState(() => 1);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    document.title = `${count} times`;
  });
  return (
    <>
      <p>click {count} times</p>
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        button
      </button>
      {theme.background}
      <br />
      <button
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dispatch({ type: "subtract" });
        }}
      >
        subtract
      </button>
      {`times is ${state.times}`}
    </>
  );
};

export default Example;
