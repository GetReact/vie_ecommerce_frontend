import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routes from './containers/Routes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <body>
        <Routes />
      </body>
      <footer className="footer-distributed">
        <Footer />
      </footer>
    </div>
  );
}

export default App;