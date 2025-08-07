
jsx
import React, { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div className="container">
      <h1>Simple Counter App</h1>
      <p>Count: {count}</p>
 <button onClick={increment}>Increase Count</button>
    </div>
  );
}

export default App;


