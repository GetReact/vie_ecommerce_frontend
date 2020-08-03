import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Carousel.css";


const carouselSlider = (props) => (
    <Carousel className="home-carousel">
        <Carousel.Item>
            <img
                className="d-block w-100 cover"
                src='assets/images/shoes-img/shoes-cover-1.jpg'
                height="600px"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 cover"
                src='assets/images/shoes-img/shoes-cover-2.jpg'
                height="600px"
                alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 cover"
                src='assets/images/shoes-img/shoes-cover-3.jpg'
                height="600px"
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
);

export default carouselSlider;