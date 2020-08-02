import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './HowToSell.css'

const HowToSell = () => {
    return (
        <Carousel className="big-carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/images/how-to-sell/how-to-sell.jpg"
                    alt="how-to-sell"
                    height="950px"
                />
                <Carousel.Caption>
                    <div className="how-to-sell">
                        <h1 style={{"color": "white",}}>3 BƯỚC ĐƠN GIẢN</h1>
                        <h1 style={{"color": "black",}}>ĐỂ TRỞ THÀNH</h1>
                        <h1 style={{"color": "yellow",}}>SELLER TẠI VIGG.</h1>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/images/how-to-sell/sell-step1.jpg"
                    alt="how-to-sell"
                    height="950px" 
                />
                <Carousel.Caption>
                    <div className="steps">
                        <h1 style={{"color": "black", "textAlign": "right"}}>BƯỚC 1: CHỤP ẢNH GIÀY</h1>
                        <h1 style={{"color": "black", "textAlign": "right"}}>THEO TIÊU CHUẨN</h1>
                        <h1 style={{"color": "black", "textAlign": "right"}}>CỦA VIGG.</h1>
                        <LinkContainer to="/image-standards">
                            <Button variant="outline-warning" size="lg">
                                XEM TIÊU CHUẨN
                            </Button>
                        </LinkContainer>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/images/how-to-sell/sell-step2.jpg"
                    alt="how-to-sell"
                    height="950px"
                />
                <Carousel.Caption>
                    <div className="steps">
                        <h1 style={{"color": "white", "textAlign": "right"}}>BƯỚC 2: GỬI ẢNH QUA </h1>
                        <h1 style={{"color": "white", "textAlign": "right"}}>VIGG ĐỂ ĐƯỢC</h1>
                        <h1 style={{"color": "white", "textAlign": "right"}}>LEGIT-CHECK.</h1>
                        <LinkContainer to="/sell">
                            <Button variant="outline-secondary" size="lg">
                                GỬI ẢNH
                            </Button>
                        </LinkContainer>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/images/how-to-sell/sell-step3.jpg"
                    alt="how-to-sell"
                    height="950px"
                />
                <Carousel.Caption>
                    <div className="steps">
                        <h1 style={{"color": "black", "textAlign": "right"}}>BƯỚC 3: GIÀY ĐƯỢC ĐĂNG</h1>
                        <h1 style={{"color": "black", "textAlign": "right"}}>BÁN VÀ ĐỢI GIAO.</h1>
                        <LinkContainer to="/how-to-ship">
                            <Button variant="outline-success" size="lg">
                                CÁCH SHIP VÀ NHẬN TIỀN
                            </Button>
                        </LinkContainer>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HowToSell;