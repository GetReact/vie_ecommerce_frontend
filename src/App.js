import React from 'react';

import './App.css';
import Navbar from './containers/Navbar';
import Carousel from './containers/Carousel';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main role="main">
        <Carousel />
      </main>
    </div>
  );
}

export default App;