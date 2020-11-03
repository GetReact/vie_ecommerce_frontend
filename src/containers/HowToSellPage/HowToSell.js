import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './HowToSell.css'

const HowToSell = () => {
    return (
        <Carousel className="big-carousel">
            <Carousel.Item className="big-carousel-item">
                <img
                    className="d-block w-100"
                    src="assets/images/how-to-sell/how-to-sell/how-to-sell.jpg"
                    alt="how-to-sell"
                    height="950px"
                />
                <Carousel.Caption>
                    <div className="how-to-sell">
                        <h1 style={{"color": "white",}}>3 SIMPLE STEPS</h1>
                        <h1 style={{"color": "black",}}>TO BECOME</h1>
                        <h1 style={{"color": "yellow",}}>SELLER AT VIGG.</h1>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="big-carousel-item">
                <img
                    className="d-block w-100"
                    src="assets/images/how-to-sell/how-to-sell/sell-step1.jpg"
                    alt="how-to-sell"
                    height="950px" 
                />
                <Carousel.Caption>
                    <div className="steps">
                        <h1 style={{"color": "black", "textAlign": "right"}}>STEP 1: TAKE PICTURES</h1>
                        <h1 style={{"color": "black", "textAlign": "right"}}>BASED ON OUR STANDARDS</h1>
                        <LinkContainer to="/image-standards">
                            <Button variant="outline-warning" size="lg">
                                SEE STANDARDS
                            </Button>
                        </LinkContainer>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="big-carousel-item">
                <img
                    className="d-block w-100"
                    src="assets/images/how-to-sell/how-to-sell/sell-step2.jpg"
                    alt="how-to-sell"
                    height="950px"
                />
                <Carousel.Caption>
                    <div className="steps">
                        <h1 style={{"color": "white", "textAlign": "right"}}>STEP 2: UPLOAD PICTURES</h1>
                        <h1 style={{"color": "white", "textAlign": "right"}}>TO US FOR LEGIT-CHECK</h1>
                        <LinkContainer to="/sell">
                            <Button variant="outline-secondary" size="lg">
                                UPLOAD
                            </Button>
                        </LinkContainer>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="big-carousel-item">
                <img
                    className="d-block w-100"
                    src="assets/images/how-to-sell/how-to-sell/sell-step3.jpg"
                    alt="how-to-sell"
                    height="950px"
                />
                <Carousel.Caption>
                    <div className="steps">
                        <h1 style={{"color": "black", "textAlign": "right"}}>STEP 3: YOUR SHOES IS POSTED!</h1>
                        <h1 style={{"color": "black", "textAlign": "right"}}>WAIT FOR THE MIRACLE . . .</h1>
                        <LinkContainer to="/how-to-ship">
                            <Button variant="outline-success" size="lg">
                                HOW TO SHIP
                            </Button>
                        </LinkContainer>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HowToSell;