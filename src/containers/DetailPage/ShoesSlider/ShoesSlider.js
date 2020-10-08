import React from 'react';
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ShoesSlider.css';

const ShoesSlider = () => {
    const settings = {
        infinite: false,
        centerPadding: '0',
        slidesToShow: 3,
        swipeToSlide: true,
        pauseOnHover: true,
        autoplay: true,
        speed: 300,
        nextArrow: <ArrowRight/>,
        prevArrow: <ArrowLeft/>,
    }

    return (
        <Slider className="shoes-slider" {...settings}>
            <Image src="assets/images/shoes-img/shoes4.jpg"/>    
            <Image src="assets/images/shoes-img/shoes4.jpg"/>    
            <Image src="assets/images/shoes-img/shoes4.jpg"/>    
            <Image src="assets/images/shoes-img/shoes4.jpg"/>   
            <Image src="assets/images/shoes-img/shoes4.jpg"/>   
            <Image src="assets/images/shoes-img/shoes4.jpg"/>   
            <Image src="assets/images/shoes-img/shoes4.jpg"/>    
        </Slider>
    );
}

export default ShoesSlider;