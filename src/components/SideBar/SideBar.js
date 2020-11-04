import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Slider } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectSideBarFilters, selectSideBarDropped } from '../../redux/sidebar/sidebar-selectors';
import { resetFilters, toggleSideBarDropped } from '../../redux/sidebar/sidebar-actions';

import "./SideBar.css";

const SideBar = (props) => {
    const { dropped, toggleSideBarDropped, filters, resetFilters } = props;

    const { 
        minPrice, 
        maxPrice,
        minSize,
        maxSize,
    } = filters;

    const [ priceVal, setPrice ] = useState([minPrice, maxPrice]);
    const [ sizeVal, setSize ] = useState([minSize, maxSize]);
    const [ prodConditions, setConditions] = useState([]);

    const handlePriceChange = (event, newPrice) => {
        setPrice(newPrice);
    }
    
    const handleSizeChange = (event, newSize) => {
        setSize(newSize);
    };

    const handleCheckboxClicked = event => {
        const { value } = event.target;
        const existed = prodConditions.find(cond => cond === value);
        console.log(existed);
        if (existed) {
            const index = prodConditions.indexOf(existed);
            prodConditions.splice(index, 1);
        } else {
            setConditions([ ...prodConditions, value ]);
        }
    }

    const handleSubmit = () => {
        resetFilters(
            {
                minPrice: priceVal[0],
                maxPrice: priceVal[1],
                minSize: sizeVal[0],
                maxSize: sizeVal[1],
                conditions: prodConditions,
            }
        );
    };

    const dropdownToggle = (
        dropped
        ? <span className='toggle' aria-labelledby='minus' role='img'>&#10134;</span>
        : <span className='toggle' aria-labelledby='plus' role='img'>&#10133;</span>
    );

    const catagories = (
        <div className='items'>
            <p><input className='toggle' type='checkbox' id='catagories'/><span>Adidas</span></p>
            <p><input className='toggle' type='checkbox' id='catagories'/><span>Nike</span></p>
        </div>
    );

    const price = (
        <div className='items'>
            <Slider
                style={{width:"80%", left:'5%', right:'15%',}}
                value={priceVal}
                min={0}
                max={1000}
                onChange={ handlePriceChange }
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"/>
            <h6 style={{textAlign:"center",}}>{priceVal[0]} &lt; Price (USD) &lt; {priceVal[1]}</h6>
        </div>
    );

    const size = (
        <div className='items'>
            <Slider
                style={{width:"80%", left:'5%', right:'15%',}}
                value={sizeVal}
                min={0}
                max={20}
                onChange={ handleSizeChange }
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"/>
        </div>
    );

    const conditionsOptions = (
        <div className='items'>
        <p>
            <input 
                className='toggle' 
                type='checkbox' 
                id='catagories'
                value='new' 
                onChange={ handleCheckboxClicked }/>
            <span>New</span>
        </p>
        <p>
            <input 
                className='toggle' 
                type='checkbox' 
                id='catagories'
                value='used' 
                onChange={ handleCheckboxClicked }/>
            <span>Used</span>
        </p>
    </div>
    );

    return (
        <div className={dropped ? 'sidebar dropped' : 'sidebar'}>
            <div className='sidebar-cell'>
                <div className='sidebar-header' onClick={toggleSideBarDropped}>
                    <span className='sidebar-header-title'>Brands</span>
                    {dropdownToggle}
                </div>
                { dropped ? catagories : "" }
            </div>
            <div className='sidebar-cell'>
                <div className='sidebar-header' onClick={toggleSideBarDropped}>
                    <span className='sidebar-header-title'>Price</span>
                    {dropdownToggle}
                </div>
                { dropped ? price : "" }
            </div>
            <div className='sidebar-cell'>
                <div className='sidebar-header' onClick={toggleSideBarDropped}>
                    <span className='sidebar-header-title'>Size</span>
                    {dropdownToggle}
                </div>
                { dropped ? size : "" }
            </div>
            <div className='sidebar-cell-2'>
                <div className='sidebar-header' onClick={toggleSideBarDropped}>
                    <span className='sidebar-header-title'>Conditions</span>
                    {dropdownToggle}
                </div>
                { dropped ? conditionsOptions : "" }
            </div>
            { dropped ? (
                <Button
                    variant="outline-dark"
                    type="submit"
                    style={{
                        width:"30%",
                        marginTop:"0.5cm",
                        marginLeft:"35%",
                        marginRigth:"45%",
                    }}
                    onClick={ handleSubmit }
                >
                    Apply Now
                </Button>
            ) : "" }
        </div>
    )
}

const mapStatetoProps = createStructuredSelector({
    filters: selectSideBarFilters,
    dropped: selectSideBarDropped,
});

const mapDispatchtoProps = dispatch => ({
    resetFilters: newValues => dispatch(resetFilters(newValues)),
    toggleSideBarDropped: () => dispatch(toggleSideBarDropped()),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(SideBar);
