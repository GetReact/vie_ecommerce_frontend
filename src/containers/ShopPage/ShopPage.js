import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Pagination } from '@material-ui/lab';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShoesCollection } from '../../redux/shop/shop-selectors';
import { selectViewBar } from '../../redux/filters/filters-selectors';

import SideBar from '../../components/SideBar/SideBar';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortBar from '../../components/SortBar/SortBar';
import ViewBar from '../../components/ViewBar/ViewBar';

import "./ShopPage.css";

const ShopPage = ({ shoesCollection, viewbar }) => {
    const [ width, setWidth ] = useState(window.innerWidth);
    const [ pageValue, setPageValue ] = useState(1);

    const handlePageChange = (event, value) => {
        console.log(value);
        setPageValue(value);
    }

    useEffect(() => {
        const handleWindowSizeChange = () => {
            if (window.innerWidth !== width) setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowSizeChange);
        return _ => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    });

    const paginateItems = (items) => {
        const lastIndex = pageValue * viewbar;
        const firstIndex = lastIndex - viewbar;

        let itemsToDisplay = [];

        for (let i = 0; i < items.length; ++i) {
            if (firstIndex <= i && i < lastIndex) {
                itemsToDisplay.push(items[i]);
            }
        }

        console.log(itemsToDisplay);

        return itemsToDisplay
    }

    return (
        <div className="productpage">
            {   
                width > 992 ? (
                    <>
                        <Col lg={4} md={12}>
                            <SideBar/>
                        </Col>
                        <Col lg={8} md={12} className="products">
                            <Row className="search-bar">
                                <SearchBar/>
                            </Row>
                            <Row className='select-bar'>
                                <ViewBar/>
                                <SortBar/>
                            </Row>
                            <Row className="product-grid">
                                <ProductGrid items = { paginateItems(shoesCollection) }/>
                            </Row>
                            <Row className='pagination-row'>
                                <Pagination
                                    className='pagination-bar' 
                                    count={ Math.ceil(shoesCollection.length / viewbar) }
                                    size='large'
                                    variant='outlined'
                                    color='primary'
                                    onChange={ handlePageChange }/>
                            </Row>
                        </Col>
                    </>
                )
                : (
                    <>
                        <Row>
                            <Col md={12}><SideBar/></Col>
                            <Col md={12}>
                                <span className='select-bar-small'><ViewBar/></span>
                                <span className='select-bar-small'><SortBar/></span>
                            </Col>
                            <Col md={12}>
                                <ProductGrid items = { shoesCollection }/>
                            </Col>
                            <Col md={12}>
                                <Pagination
                                    className='pagination-bar' 
                                    count={ Math.ceil(shoesCollection.length / viewbar) }
                                    size='large'
                                    variant='outlined'
                                    color='primary'
                                    onChange={ handlePageChange }/>
                            </Col>
                        </Row>
                    </>
                )
            }

        </div>
    );
};

const mapStatetoProps = createStructuredSelector({
    shoesCollection: selectShoesCollection,
    viewbar: selectViewBar
});

export default connect(mapStatetoProps)(ShopPage);
