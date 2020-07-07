import React from "react";

const MyComponent = (props: any) => {
  const myObj = {
    field1: "hi",
    field2: "helo",
  };
  const mySimpleArray = ["a", 1, "asf"];
  console.log("my simple arra", mySimpleArray);

  const arrayObj = [{ a: "a", anoth: "asdf" }, 1, "asf"];
  console.log("my simple arra", mySimpleArray);

  const drivers = [
    { name: "john", car: "bettle" },
    { name: "leon", car: "lexus" },
    { name: "jane", car: "prius" },
  ];

  return (
    <div>
      <h1>javascript data structures</h1>
      <h2>{"Objects {}"}</h2>
      <pre>{JSON.stringify(myObj)}</pre>
      <p>{myObj.field1}</p>
      <p>{myObj["field2"]}</p>
      <h2>Arrays</h2>
      <p>{JSON.stringify(mySimpleArray)}</p>
      <p>{mySimpleArray[3]}</p>
      <pre>{JSON.stringify(arrayObj)}</pre>
      <pre>{JSON.stringify(arrayObj[0])}</pre>
    </div>
  );
};

export default MyComponent;
