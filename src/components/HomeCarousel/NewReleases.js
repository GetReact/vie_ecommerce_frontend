import React from 'react';
import Slider from 'react-slick';
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '../Card/Card';
import "./SlickCarousel.css";

const NewReleases = () => {
    const settings = {
        infinite: false,
        centerPadding: '0',
        slidesToShow: 3,
        swipeToSlide: true,
        dots: true,
        pauseOnHover: true,
        autoplay: true,
        speed: 300,
        nextArrow: <ArrowRight/>,
        prevArrow: <ArrowLeft/>,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    }

    return (
        <div className="container">
            <h3 className="style mb-3">
                <a href="/shop">
                    NEW RELEASES
                </a>
            </h3>
            <Slider {...settings} className="slider-carousel">
                <Card img="assets/images/shoes-img/shoes1.jpg"/>
                <Card img="assets/images/shoes-img/shoes2.jpg"/>
                <Card img="assets/images/shoes-img/shoes3.jpg"/>
                <Card img="assets/images/shoes-img/shoes4.jpg"/>
                <Card img="assets/images/shoes-img/shoes1.jpg"/>
                <Card img="assets/images/shoes-img/shoes2.jpg"/>
            </Slider>
        </div>
    );
};

export default NewReleases;
