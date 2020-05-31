import React from 'react';

import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Carousel from './containers/Carousel/Carousel';
import ProductGrid from './containers/ProductGrid/ProductGrid';
import NewReleases from './containers/OwlCarousel/NewReleases/NewReleases';
import OurPartners from './containers/OwlCarousel/OurPartners/OurPartners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main role="main">
        <Carousel />
      </main>
      <section>
        <NewReleases />
        <ProductGrid />
        <OurPartners />
      </section>
      <Footer />
    </div>
  );
}

export default App;