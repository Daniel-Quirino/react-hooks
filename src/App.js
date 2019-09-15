import React from 'react';
import './App.css';

import Poem  from './Poem';
import Store from './Store';

function App() {

  return (
    <Store>
      <div className="App">
        <header className="App-header">
          <Poem />
        </header>
      </div>
    </Store>
  );
}

export default App;