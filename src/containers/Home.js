import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import NewReleases from '../components/HomeCarousel/NewReleases';
import BestSellers from '../components/HomeCarousel/BestSellers';
import OurPartners from '../components/OurPartners/OurPartners';

const Home = (props) => (
    <div>
        <main role="main">
            <Carousel />
        </main>
        <section className="container">
            <NewReleases />
            <BestSellers />
            <OurPartners />
        </section>
    </div>
);

export default Home;
