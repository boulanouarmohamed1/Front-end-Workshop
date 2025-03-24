import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function main() {
  return (
    <div>
      <Greeting name="Mohamed" />
      <Greeting name="Zeus" />
    </div>
  );
}

export default main;
