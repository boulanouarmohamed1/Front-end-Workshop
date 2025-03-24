import React, { useState } from 'react';
import "./App.css";

const InputChangeExample = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="input-container">
      <input type="text" value={text} onChange={handleChange} className="input-field" />
      <p className="input-text">You typed: {text}</p>
    </div>
  );
};

export default InputChangeExample;
