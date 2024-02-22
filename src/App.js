import React from 'react';
import './App.css';
import Rulesteps from './Rulesteps'; // Corrected import statement

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Compliance Verification Wizard</h1>
      </header> */}
      <main>
        <Rulesteps /> {/* Updated component name */}
      </main>
    </div>
  );
}

export default App;
