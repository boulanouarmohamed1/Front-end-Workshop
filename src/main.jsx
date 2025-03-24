import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./App.css"
import CounterExample from './CounterExample';
import PropsExample from './PropsExample';
import UseStateArrayExample from './UseStateArrayExample';
import ClickEvent from './ClickEventsExample';
import HandlingInputChanges from './HandlingInputChanges';
import InteractiveComponent from './InteractiveComponent';
import ConditionalRendering from './ConditionalRendering';
import UseEffectCounter from './UseEffectCounter';
import FetchDataExample from './FetchData';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/*<PropsExample/> 
     <CounterExample />
     <UseStateArrayExample/>
     <ClickEvent/>
     <HandlingInputChanges/>
     <InteractiveComponent/>
     <ConditionalRendering/>
     <UseEffectCounter/>
     <FetchDataExample/>*/}



<nav className="navbar">
        <h1 className="logo">React Router App</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/props">Props</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/state-array">State Array</Link></li>
          <li><Link to="/click">Click</Link></li>
          <li><Link to="/input">Input</Link></li>
          <li><Link to="/interactive">Interactive</Link></li>
          <li><Link to="/conditional">Conditional</Link></li>
          <li><Link to="/effect">UseEffect</Link></li>
          <li><Link to="/fetch">Fetch Data</Link></li>
        </ul>
      </nav>

    
      <div className="content">
        <Routes>
          <Route path="/" element={<h1 className="welcome-text">Welcome to React Router Example</h1>} />
          <Route path="/props" element={<PropsExample />} />
          <Route path="/counter" element={<CounterExample />} />
          <Route path="/state-array" element={<UseStateArrayExample />} />
          <Route path="/click" element={<ClickEvent />} />
          <Route path="/input" element={<HandlingInputChanges />} />
          <Route path="/interactive" element={<InteractiveComponent />} />
          <Route path="/conditional" element={<ConditionalRendering />} />
          <Route path="/effect" element={<UseEffectCounter />} />
          <Route path="/fetch" element={<FetchDataExample />} />
        </Routes>
        </div>  





  </BrowserRouter>
);













