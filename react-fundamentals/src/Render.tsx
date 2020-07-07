import React from "react";

const MyComponent = (props) => {
  return (
    <div>
      <h1>Render</h1>
      <h3>kelan nag rerender?</h3>
      <ol>
        <li>when props changes</li>
        <li>when state changes</li>
      </ol>
    </div>
  );
};

export default MyComponent;
