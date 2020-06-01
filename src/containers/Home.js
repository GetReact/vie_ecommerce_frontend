import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import NewReleases from '../components/OwlCarousel/NewReleases/NewReleases';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import OurPartners from '../components/OwlCarousel/OurPartners/OurPartners';

const Home = (props) => (
    <div>
        <main role="main">
            <Carousel />
        </main>
        <section>
            <NewReleases />
            <ProductGrid />
            <OurPartners />
        </section>
    </div>
);

export default Home;

