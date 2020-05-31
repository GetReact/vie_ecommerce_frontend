import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import img1 from '../../../img/brand-1.svg';
import img2 from '../../../img/brand-2.svg';
import img3 from '../../../img/brand-3.svg';
import img4 from '../../../img/brand-4.svg';
import img5 from '../../../img/brand-5.svg';
import img6 from '../../../img/brand-6.svg';
import "../OwlCarousel.css";
import "./OurPartners.css";

const OurPartners = (props) => (
    <div className="container">
        <h3 className="style">OUR PARTNERS</h3>
        <div id="our-partners" className="owl-carousel" nav="true">
            <div className="item d-flex align-items-center justify-content-center">
                <div className="w-6rem"><img className="img-fluid" src={img1} alt="Brand"/></div>
            </div>
            <div className="item d-flex align-items-center justify-content-center">
                <div className="w-6rem"><img className="img-fluid" src={img2} alt="Brand"/></div>
            </div>
            <div className="item d-flex align-items-center justify-content-center">
                <div className="w-6rem"><img className="img-fluid" src={img3} alt="Brand"/></div>
            </div>
            <div className="item d-flex align-items-center justify-content-center">
                <div className="w-6rem"><img className="img-fluid" src={img4} alt="Brand"/></div>
            </div>
            <div className="item d-flex align-items-center justify-content-center">
                <div className="w-6rem"><img className="img-fluid" src={img5} alt="Brand"/></div>
            </div>
            <div className="item d-flex align-items-center justify-content-center">
                <div className="w-6rem"><img className="img-fluid" src={img6} alt="Brand"/></div>
            </div>
        </div>
        <h3 className="style">OUR VALUES</h3>
        <div className="row">
            <div className="d-flex justify-content-center col-lg-4 col-md-4 col-sm-4 col-4 my-3"><img src={img1} alt="value" id="value" /></div>
            <div className="d-flex justify-content-center col-lg-4 col-md-4 col-sm-4 col-4 my-3"><img src={img2} alt="value" id="value" /></div>
            <div className="d-flex justify-content-center col-lg-4 col-md-4 col-sm-4 col-4 my-3"><img src={img3} alt="value" id="value" /></div>
        </div>
    </div>  

);


export default OurPartners;

