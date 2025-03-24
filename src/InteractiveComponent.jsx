import React, { useState } from 'react';
import "./App.css";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-container">
      <p className="toggle-text">The button is {isOn ? 'ON' : 'OFF'}</p>
      <button className={`toggle-button ${isOn ? 'on' : 'off'}`} onClick={toggleState}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
};

export default ToggleButton;
