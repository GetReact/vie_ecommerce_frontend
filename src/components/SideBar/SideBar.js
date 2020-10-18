import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Slider } from '@material-ui/core';
import "./SideBar.css";

const SideBar = () => {
    const [ dropped, setDropped ] = useState(false);
    const [priceVal, setPrice] = useState([50, 1000]);
    const [sizeVal, setSize] = useState([7, 10]);

    const handleDropDown = () => {
        setDropped(!dropped);
    }

    const handlePriceChange = (event, newPrice) => {
        setPrice(newPrice);
    }
    
    const handleSizeChange = (event, newSize) => {
        setSize(newSize);
    };

    const dropdownToggle = (
        dropped
        ? <span className='toggle'>&#10134;</span>
        : <span className='toggle'>&#10133;</span>
    );

    const catagories = (
        <div className='items'>
            <p><input className='toggle' type='checkbox' id='catagories'/><span>Men</span></p>
            <p><input className='toggle' type='checkbox' id='catagories'/><span>Women</span></p>
            <p><input className='toggle' type='checkbox' id='catagories'/><span>Kids</span></p>
        </div>
    );

    const price = (
        <div className='items'>
            <Slider
                style={{width:"90%", left:'5%', right:'5%',}}
                value={priceVal}
                min={50}
                max={1000}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"/>
            <h6 style={{textAlign:"center",}}>${priceVal[0]} &lt; Current &lt; ${priceVal[1]}</h6>
        </div>
    );

    const size = (
        <div className='items'>
            <Slider
                style={{width:"90%", left:'5%', right:'5%',}}
                value={sizeVal}
                min={0}
                max={20}
                onChange={handleSizeChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"/>
        </div>
    );

    const conditions = (
        <div className='items'>
        <p><input className='toggle' type='checkbox' id='catagories'/><span>New</span></p>
        <p><input className='toggle' type='checkbox' id='catagories'/><span>Used</span></p>
    </div>
    );

    return (
        <div className='sidebar'>
            <div className='sidebar-header' onClick={handleDropDown}>
                {dropdownToggle}
                Catagories
            </div>
            { dropped ? catagories : "" }
            <div className='sidebar-header' onClick={handleDropDown}>
                {dropdownToggle}
                Price
            </div>
            { dropped ? price : "" }
            <div className='sidebar-header' onClick={handleDropDown}>
                {dropdownToggle}
                Size
            </div>
            { dropped ? size : "" }
            <div className='sidebar-header' onClick={handleDropDown}>
                {dropdownToggle}
                Conditions
            </div>
            { dropped ? conditions : "" }
            { dropped ? (
                <Button
                    variant="outline-dark"
                    type="submit"
                    style={{
                        width:"4cm",
                        float: "right",
                        textAlign:"center",
                    }}
                >
                    Apply Now
                </Button>
            ) : "" }
        </div>
    )
}

export default SideBar;
