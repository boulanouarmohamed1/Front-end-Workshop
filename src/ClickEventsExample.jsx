import React, { useState } from 'react';
import "./App.css";

const ButtonClickExample = () => {
  const [message, setMessage] = useState("Hello, Click the button!");

  const handleClick = () => {
    setMessage("Button clicked!");
  };

  return (
    <div className="button-container">
      <p className="button-message">{message}</p>
      <button className="button-click" onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ButtonClickExample;
