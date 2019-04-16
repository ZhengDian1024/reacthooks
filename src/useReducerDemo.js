import React, { useState, useEffect, useReducer } from "react";

const initialState = {
  count: 0,
  step: 1
};

function reducer(state, action) {
  const { count, step } = state;
  if (action.type === "tick") {
    return { count: count + step, step };
  } else if (action.type === "step") {
    return { count, step: action.step };
  } else {
    throw new Error();
  }
}

export function ReduceCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
  }, [dispatch]);

  function onChange(e) {
    dispatch({ type: "step", step: +e.target.value });
  }

  return (
    <div>
      <h1>{count}</h1>
      <input value={step} onChange={onChange} />
    </div>
  );
}
