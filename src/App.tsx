import React from 'react';
import './App.css';
const world = 'world';

function hello(who: string = world): string {
  return `Hello ${who}! `;
}


// write a function in typescript called displayNums which is a for loop over a num
// and returns the number of iterations


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {hello()}
      </header>
    </div>
  );
}

export default App;
