import React, { useState } from "react";

const MyComponent = (props) => {
  console.log("render");
  const [counter, setCounter] = useState(1);
  const [a, setA] = useState({ f: 2 });

  return (
    <div>
      <h1>States</h1>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
          setA((prev) => ({ ...prev, f: prev.f + 2 }));
        }}
      >
        +
      </button>
      <pre>{JSON.stringify(a)}</pre>
      <ChildC name="john" lastname="doe" children="hello"></ChildC>
    </div>
  );
};

interface ICProps {
  name: string;
  lastname: string;
  children: React.ReactNode;
  fnProp?: () => void;
}

const ChildC = (props: ICProps) => {
  return (
    <div>
      {props.name} {props.lastname}
      <div style={{ border: "1px solid tomato" }}>{props.children}</div>
      <button onClick={props.fnProp}> hi</button>
    </div>
  );
};

export default MyComponent;
