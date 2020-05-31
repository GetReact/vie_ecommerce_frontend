import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Card from '../../../components/Card/Card';
import img1 from '../../../img/shoes1.jpg';
import img2 from '../../../img/shoes2.jpg';
import img3 from '../../../img/shoes3.jpg';
import "../OwlCarousel.css";

const NewReleases = (props) => (
  <div className="container">
      <h3 className="style">
        <a href="/shop">
          NEW RELEASES
        </a>
      </h3>
      <div id="new-releases" className="owl-carousel" nav='true'>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 my-3"><Card img={img1}/></div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 my-3"><Card img={img2}/></div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 my-3"><Card img={img3}/></div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 my-3"><Card img={img1}/></div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 my-3"><Card img={img2}/></div>                
      </div> 
  </div>  
);

export default NewReleases;

