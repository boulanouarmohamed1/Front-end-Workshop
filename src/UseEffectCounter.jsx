import React, { useState, useEffect } from 'react';
import './App.css'; // Make sure to import your CSS file

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('The component has been rendered or updated!');

    return () => {
      console.log('Cleanup before next render or unmounting');
    };
  }, [count]); // This effect runs when 'count' changes

  return (
    <div className="example-container">
      <h1 className="example-count">{count}</h1>
      <button className="example-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Example;
