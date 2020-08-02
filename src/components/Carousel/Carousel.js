import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Carousel.css";
import img1 from '../../img/shoes-cover-1.jpg';
import img2 from '../../img/shoes-cover-2.jpg';
import img3 from '../../img/shoes-cover-3.jpg';


const carouselSlider = (props) => (
    <Carousel className="home-carousel">
        <Carousel.Item>
            <img
                className="d-block w-100 cover"
                src={img1}
                height="600px"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 cover"
                src={img2}
                height="600px"
                alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 cover"
                src={img3}
                height="600px"
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
);

export default carouselSlider;