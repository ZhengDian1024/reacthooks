import React, { useCallback } from "react";

export function CallbackDemo() {
  const memoizedHandleClick = useCallback(() => {
    console.log("Click happened");
  }, []);
  return (
    <div>
      <button onClick={memoizedHandleClick}>按钮</button>
    </div>
  );
}
