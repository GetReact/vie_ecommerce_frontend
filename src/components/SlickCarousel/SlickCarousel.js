import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectShoesCollection } from '../../redux/shop/shop-selectors';

import Card from '../Card/Card';
import "./SlickCarousel.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SlickCarousel = (props) => {
    const settings = {
        infinite: false,
        centerPadding: '0',
        slidesToShow: (props.size === 'large' ? 3 : 4),
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
        <Container>
            <h3 className="style mb-3" onClick = {() => props.history.push("/shop")}>
                {props.name.toUpperCase()}
            </h3>
            <Slider {...settings} className="slider-carousel">
                {props.shoesCollection.slice(0, 7).map(
                    item => <Card key={item.id} img={item.imageUrl} id={item.id} item={item}/>
                )}
            </Slider>
        </Container>
    )
}

const mapStatetoProps = createStructuredSelector({
    shoesCollection: selectShoesCollection,
});

export default withRouter(connect(mapStatetoProps)(SlickCarousel));
