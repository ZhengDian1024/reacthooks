import React, { Component, useState } from "react";

export class Greeter extends Component {
  state = {
    loaded: false
  };

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    return <div>hello {this.props.firstName}</div>;
  }
}

export function Demo1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Mycount: {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
    </div>
  );
}

export function ShowAndHide() {
  const [isShow, setDisplay] = useState(true);
  return (
    <div>
      <p>{`${isShow}`}</p>
      {isShow && <h2>显示</h2>}
      <button
        onClick={() => {
          setDisplay(!isShow);
        }}
      >
        {isShow ? "隐藏" : "显示"}
      </button>
    </div>
  );
}
