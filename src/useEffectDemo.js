import React, { useState, useEffect } from "react";

export function LifeCyles({ id }) {
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   console.log("componentDidMount or componentDidUpdate");
  //   return () => {
  //     console.log("componentWillUnmount");
  //   };
  // });

  // useEffect(() => {
  //   console.log("仅在componentDidMount的时候执行");
  // }, []);

  useEffect(() => {
    console.log(id);
    console.log("在componentDidMount的时候执行, 或者loaded改变时");
    setLoaded(true);
  }, [loaded, id]);

  return <div>{loaded ? 111 : 222}</div>;
}

// useEffect中定义的副作用函数的执行不会阻碍浏览器更新视图,也就是说这些函数是异步执行的，而之前的componentDidMount或componentDidUpdate中的代码则是同步执行的。这种安排对大多数副作用说都是合理的，但有的情况除外，比如我们有时候需要先根据DOM计算出某个元素的尺寸再重新渲染，这时候我们希望这次重新渲染是同步发生的，也就是说它会在浏览器真的去绘制这个页面前发生
export function AutoCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tId = setInterval(() => {
      console.log(count);
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(tId);
    };
  }, [count]);

  return <h1>{count}</h1>;
}

let timer;
export function EffectDemo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("componentDidMount" + count);
  }, [count]);

  useEffect(() => {
    timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      console.log("componentWillUnmount");
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      Count: {count}
      <button
        onClick={() => {
          console.log(timer);
          clearInterval(timer);
        }}
      >
        clear
      </button>
    </div>
  );
}
