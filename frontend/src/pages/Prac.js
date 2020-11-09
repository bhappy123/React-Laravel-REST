import React, { useState } from 'react'

function Prac() {
  const [count, setcount] = useState(0);
  const [state, setState] = useState({ name: "bikash", author: "B.R. Dash" });

  // Use State Use While dealing with only one value
  const incHandler = () => {
    setcount((prevCount) => prevCount + 1);
  };
  // Use State Use While dealing with only one value
  const minHandler = () => {
    setcount((prevCount) => prevCount - 1);
  };

  // Use State Use While using objects
  const stateHandler = () => {
    setState((prevState) => {
      return {
        name: "harry",
        author: "ecjs",
      };
    });
  };

  return (
    <div>
      <button onClick={minHandler}>-</button>
      <button>{count}</button>
      <button onClick={incHandler}>+</button>
      <h3>
        {state.name} {state.author}
      </h3>
      <button onClick={stateHandler}>Change Name</button>
    </div>
  );
}

export default Prac
