import React from "react";

const MyComponent = (props: any) => {
  const drivers = [
    { name: "john", last: "cena", car: "bettle" },
    { name: "leon", last: "tiger", car: "lexus" },
    { name: "jane", last: "doe", car: "prius" },
    { name: "cena", last: "john", car: "bettle" },
    { name: "odee", last: "", car: "bettle" },
    { name: "den", last: "", car: "bettle" },
  ];

  const driverNamesOnly = drivers.map((driver, idx) => {
    return `hi ${driver.name} ${driver.last}`;
  });

  const driverNamesOnlyFinalForm = drivers.map((driver, idx) => ({
    fullname: `${driver.name} ${driver.last}`,
  }));

  function filterFn(d) {
    return d.car === "bettle";
  }
  const bettleOwners = drivers.filter(filterFn);
  const firstNameOfBettleOwners = drivers
    .filter(filterFn)
    .map((d) => d.name) //[ 'john', 'odee']
    .map((d) => `${d} rocks`);

  return (
    <div>
      <h1>arrays</h1>
      {drivers
        .filter((d) => d.last === "")
        .map((d) => {
          return (
            <div key={d.name} style={{ display: "block" }}>
              <button>{d.name}</button>
            </div>
          );
        })}
      <h2>array.map</h2>
      <h3>from</h3>
      <pre>{JSON.stringify(drivers)}</pre>
      <h3>to</h3>
      <pre>{JSON.stringify(driverNamesOnly)}</pre>
      <pre>{JSON.stringify(driverNamesOnlyFinalForm)}</pre>
      <h2>array.filter</h2>
      <h3>bettle owners</h3>
      <pre>{JSON.stringify(bettleOwners)}</pre>
      <h2>ccccccomboo</h2>
      <h3>bettle owners</h3>
      <pre>{JSON.stringify(firstNameOfBettleOwners)}</pre>
    </div>
  );
};

export default MyComponent;
