
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [value , setCount] = useState(0);
  const onAdd = () => {
    setCount(value + 1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {value} times.</p>

        <button onClick={onAdd}>Click Me</button>
        
    </div>
  )
}

export default App
