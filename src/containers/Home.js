import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import NewReleases from '../components/HomeCarousel/NewReleases';
import BestSellers from '../components/HomeCarousel/BestSellers';
import OurPartners from '../components/OurPartners/OurPartners';

const Home = (props) => (
    <div role="main">
        <Carousel />
        <NewReleases />
        <BestSellers />
        <OurPartners />
    </div>
);

export default Home;
