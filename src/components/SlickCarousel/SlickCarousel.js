import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '../Card/Card';
import "./SlickCarousel.css";

class SlickCarousel extends Component  {

    state = {
        shoesItems: [
            {
                title: 'shoes1',
                imageUrl: 'assets/images/shoes-img/shoes1.jpg',
                id: 1, 
            },
            {
                title: 'shoes2',
                imageUrl: 'assets/images/shoes-img/shoes2.jpg',
                id: 2,
            },
            {
                title: 'shoes3',
                imageUrl: 'assets/images/shoes-img/shoes3.jpg',
                id: 3,
            },
            {
                title: 'shoes4',
                imageUrl: 'assets/images/shoes-img/shoes4.jpg',
                id: 4,
            },
            {
                title: 'shoes5',
                imageUrl: 'assets/images/shoes-img/shoes1.jpg',
                id: 5,
            },
            {
                title: 'shoes6',
                imageUrl: 'assets/images/shoes-img/shoes2.jpg',
                id: 6,
            },
        ]
    }

    render() {
        const settings = {
            infinite: false,
            centerPadding: '0',
            slidesToShow: (this.props.size === 'large' ? 3 : 4),
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
                <h3 className="style mb-3" onClick = {() => this.props.history.push("/shop")}>
                    {this.props.name.toUpperCase()}
                </h3>
                <Slider {...settings} className="slider-carousel">
                    {this.state.shoesItems.map(({imageUrl, id, ...otherSectionProps }) => (
                        <Card key={id} img={imageUrl} {...otherSectionProps}/>
                    ))}
                </Slider>
            </Container>
        )
    
    }
}

export default withRouter(SlickCarousel);
