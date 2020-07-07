import React from "react";

const MyComponent = (props: any) => {
  const drivers = [
    { name: "john", last: "cena", car: "bettle" },
    { name: "leon", last: "tiger", car: "lexus" },
    { name: "jane", last: "doe", car: "prius" },
    { name: "cena", last: "john", car: "kabayo" },
  ];

  const driverNamesOnly = drivers.map((driver, idx) => {
    return `${driver.name} ${driver.last}`;
  });

  const driverNamesOnlyFinalForm = drivers.map((driver, idx) => ({
    fullname: `${driver.name} ${driver.last}`,
  }));

  return (
    <div>
      <h1>arrays</h1>
      <h2>array.map</h2>
      <h3>from</h3>
      <pre>{JSON.stringify(drivers)}</pre>
      <h3>to</h3>
      <pre>{JSON.stringify(driverNamesOnly)}</pre>
      <pre>{JSON.stringify(driverNamesOnlyFinalForm)}</pre>
    </div>
  );
};

export default MyComponent;
