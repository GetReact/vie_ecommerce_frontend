import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from '../../../components/Card/Card';
import img1 from '../../../img/shoes1.jpg';
import img2 from '../../../img/shoes2.jpg';
import img3 from '../../../img/shoes3.jpg';
import "./NewReleases.css";

class NewReleases extends React.Component{
  render() {
    return (
        <div className="container">
            <h3 className="style">NEW RELEASES</h3>
                <OwlCarousel>
                    <Card img={img1}/>
                    <Card img={img2}/>
                    <Card img={img3}/>
                    <Card img={img1}/>
                    <Card img={img2}/>
                </OwlCarousel> 
        </div>
        
    )
  }
}

export default NewReleases;

