import React from 'react';
import { ApplicationProvider, Button } from 'lens-ui';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ApplicationProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Button>Learn React</Button>
        </header>
      </div>
    </ApplicationProvider>
  );
}

export default App;
