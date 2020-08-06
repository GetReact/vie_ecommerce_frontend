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
      <main>
        <Routes />
      </main>
      <div className="footer-distributed">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
