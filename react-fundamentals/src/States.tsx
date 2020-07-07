import React from "react";

const MyComponent = (props) => {
  function hi() {
    console.log("hi");
  }

  return (
    <div>
      <h1>Props</h1>
      <ChildC name="john" lastname="doe" children="hello"></ChildC>
      <ChildC name="john" lastname="doe" fnProp={hi}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          ipsum rem explicabo inventore pariatur voluptatem sapiente soluta
          atque quos corporis? Error, sit! Facere maiores ex quis, impedit harum
          obcaecati corrupti.
        </p>
      </ChildC>
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
