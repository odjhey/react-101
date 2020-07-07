import React from "react";

const MyComponent = (props: { title?: string }) => {
  const message: {
    type: string;
    msg: string;
  } = {
    type: "Info",
    msg: "hello",
  };

  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default MyComponent;
