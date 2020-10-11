import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import SlickCarousel from '../components/HomeCarousel/SlickCarousel';
import OurPartners from '../components/OurPartners/OurPartners';

const Home = (props) => (
    <div role="main">
        <Carousel />
        <SlickCarousel 
            size = "large"
            name = "NEW RELEASE"
        />
        <SlickCarousel 
            size = "small"
            name = "BEST SELLERS"
        />
        <OurPartners />
    </div>
);

export default Home;
