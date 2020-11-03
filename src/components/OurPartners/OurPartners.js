import React from 'react';

import { fireBaseMediaURL } from '../../config';

import "./OurPartners.css";

const OurPartners = (props) => (
    <div className="container">
        <h3 className="style">OUR PARTNERS</h3>
        <div className="row values"> 
            <div className="d-flex justify-content-center col-lg-3 col-md-3 col-sm-3 col-4 my-3"><img src={ fireBaseMediaURL('shoes-img%2Flogo-adidas.png') } alt="value" id="value" /></div>
            <div className="d-flex justify-content-center col-lg-3 col-md-3 col-sm-3 col-4 my-3"><img src={ fireBaseMediaURL('shoes-img%2Flogo-nike.png') } alt="value" id="value"/></div>
            <div className="d-flex justify-content-center col-lg-3 col-md-3 col-sm-3 col-4 my-3"><img src={ fireBaseMediaURL('shoes-img%2Flogo-reebok.png') } alt="value" id="value" /></div>
            <div className="d-flex justify-content-center col-lg-3 col-md-3 col-sm-3 col-4 my-3"><img src={ fireBaseMediaURL('shoes-img%2Flogo-puma.png') } alt="value" id="value" /></div>
        </div>
        <h3 className="style">OUR VALUES</h3>
        <div className="row values">
            <div className="d-flex justify-content-center col-lg-4 col-md-4 col-sm-4 col-4 my-3"><img src={ fireBaseMediaURL('shoes-img%2Fbrand-1.svg') } alt="value" id="value" /></div>
            <div className="d-flex justify-content-center col-lg-4 col-md-4 col-sm-4 col-4 my-3"><img src={ fireBaseMediaURL('shoes-img%2Fbrand-2.svg') } alt="value" id="value" /></div>
            <div className="d-flex justify-content-center col-lg-4 col-md-4 col-sm-4 col-4 my-3"><img src={ fireBaseMediaURL('shoes-img%2Fbrand-3.svg') } alt="value" id="value" /></div>
        </div>
    </div>  

);


export default OurPartners;

