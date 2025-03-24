import React, { useState } from 'react';
import './App.css';

const ConditionalRenderingExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div className="container">
      {isLoggedIn ? (
        <div>
          <p className="message">Welcome back!</p>
          <button className="auth-button" onClick={handleLogoutClick}>Logout</button>
        </div>
      ) : (
        <div>
          <p className="message">Please log in.</p>
          <button className="auth-button" onClick={handleLoginClick}>Login</button>
        </div>
      )}
    </div>
  );
};

export default ConditionalRenderingExample;
