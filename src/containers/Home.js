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
        <section className="container">
            <NewReleases />
            <h3 className="style">
                <a href="/shop">
                    BEST SELLERS
                </a>
            </h3>
            <ProductGrid />
            <OurPartners />
        </section>
    </div>
);

export default Home;
