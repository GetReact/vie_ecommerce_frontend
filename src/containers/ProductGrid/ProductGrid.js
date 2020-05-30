import React from 'react';
import Card from '../../components/Card/Card';
import img1 from '../../img/shoes1.jpg'
import img2 from '../../img/shoes2.jpg'
import img3 from '../../img/shoes3.jpg'
import img4 from '../../img/shoes4.jpg'
import './ProductGrid.css';

const Grid = (props) => (
    <div className="container"> 
        <h3 className="style">BEST SELLERS</h3>
        <div className="row">
            <div className="col-9 col-md-6 col-lg-3 my-3"><Card img={img1}/></div>
            <div className="col-9 col-md-6 col-lg-3 my-3"><Card img={img2}/></div>
            <div className="col-9 col-md-6 col-lg-3 my-3"><Card img={img3}/></div>
            <div className="col-9 col-md-6 col-lg-3 my-3"><Card img={img4}/></div>
            <div className="col-9 col-md-6 col-lg-3 my-3"><Card img={img1}/></div>
            <div className="col-9 col-md-6 col-lg-3 my-3"><Card img={img2}/></div>
            <div className="col-9 col-md-6 col-lg-3 my-3"><Card img={img3}/></div>
            <div className="col-9 col-md-6 col-lg-3 my-3"><Card img={img4}/></div>
        </div>
    </div>
);

export default Grid;