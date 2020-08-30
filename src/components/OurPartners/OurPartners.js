import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import "../HomeCarousel/SlickCarousel.css";
import "./OurPartners.css";

const OurPartners = (props) => (
    <div className="container">
        <h3 className="style">OUR PARTNERS</h3>
        <div className="row values">
            <div className="d-flex justify-content-center col-lg-3 col-md-3 col-sm-3 col-4 my-3"><img src="assets/images/shoes-img/logo-adidas.png" alt="value" id="value" /></div>
            <div className="d-flex justify-content-center col-lg-3 col-md-3 col-sm-3 col-4 my-3"><img src="assets/images/shoes-img/logo-nike.png" alt="value" id="value"/></div>
            <div className="d-flex justify-content-center col-lg-3 col-md-3 col-sm-3 col-4 my-3"><img src="assets/images/shoes-img/logo-reebok.png" alt="value" id="value" /></div>
            <div className="d-flex justify-content-center col-lg-3 col-md-3 col-sm-3 col-4 my-3"><img src="assets/images/shoes-img/logo-puma.png" alt="value" id="value" /></div>
        </div>
        <h3 className="style">OUR VALUES</h3>
        <div className="row values">
            <div className="d-flex justify-content-center col-lg-4 col-md-4 col-sm-4 col-4 my-3"><img src="assets/images/shoes-img/brand-1.svg" alt="value" id="value" /></div>
            <div className="d-flex justify-content-center col-lg-4 col-md-4 col-sm-4 col-4 my-3"><img src="assets/images/shoes-img/brand-2.svg" alt="value" id="value" /></div>
            <div className="d-flex justify-content-center col-lg-4 col-md-4 col-sm-4 col-4 my-3"><img src="assets/images/shoes-img/brand-3.svg" alt="value" id="value" /></div>
        </div>
    </div>  

);


export default OurPartners;

