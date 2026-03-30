
import React, { useRef, useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const increment = (() => {
    let value = Number(inputRef.current.value) || 1;
      let increasedValue = count + value;
      setCount(increasedValue);

  })
  const decrement = (() => {
    let value = Number(inputRef.current.value) || 1;
      let increasedValue = count - value;
      setCount(increasedValue);

  })

  const reset = () => setCount(0);

  return (
    <div className="hub-viewport">
      <div className="neon-bg-blur"></div>
      
      <div className="control-hub">
        <div className="glass-header">
          <div className="scanner-line"></div>
          <span className="system-text">CORE REGISTRY v4.0</span>
        </div>

        <div className="value-section">
          <h1 className="count-value">{count}</h1>
          <p className="sub-label">Active Signal Strength</p>
        </div>

        <div className="command-deck">
          <div className="input-field-outer">
            <input 
              type="number" 
              ref={inputRef} 
              placeholder="Set Step Value" 
              className="logic-input no-arrows" 
            />
          </div>
          
          <div className="button-row">
            <button className="ctrl-btn dec" onClick={decrement}>
              <span className="symbol">-</span>
            </button>
            <button className="ctrl-btn inc" onClick={increment}>
              <span className="symbol">+</span>
            </button>
          </div>
        </div>

        <button className="reset-trigger" onClick={reset}>
          Initialize Core Reset
        </button>
      </div>
    </div>
  );
};

export default App;