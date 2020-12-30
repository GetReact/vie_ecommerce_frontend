import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSideBarFilters } from '../../redux/filters/filters-selectors';
import { selectSearchBarKeywords } from '../../redux/filters/filters-selectors';
import { selectSortBar } from '../../redux/filters/filters-selectors';

import Card from '../Card/Card';

import './ProductGrid.css';

const ProductGrid = ({ items, filters, keywords, sortbar }) => {
    const keywordsMatched = (item) => {
        const formattedKeywords = keywords.trim().replace(/\s/g, '').toLowerCase();
        if (formattedKeywords.length === 0) return true;
        const { name, seller } = item;
        const formattedName = name.toLowerCase();
        const formattedSeller = seller.toLowerCase();
        return formattedName.includes(formattedKeywords) || formattedSeller.includes(formattedKeywords);
    }

    const applyFilters = (items) => {
        let itemsToDisplay = items.filter(
            item =>
                parseFloat(filters.minPrice) < parseFloat(item.price) && parseFloat(item.price) <= parseFloat(filters.maxPrice) && 
                parseInt(filters.minSize) <= parseInt(item.size) && parseInt(item.size) <= parseInt(filters.maxSize) &&
                (filters.brands.includes(item.seller.toLowerCase()) || filters.brands.length === 0) && 
                (filters.conditions.includes(item.condition) || filters.conditions.length === 0) && keywordsMatched(item)
        );

        console.log(itemsToDisplay);

        if(sortbar === 'low-to-high'){
            itemsToDisplay = itemsToDisplay.sort((a, b) => (parseFloat(a.price) >= parseFloat(b.price)) ? 1 : -1);
        }
        else if(sortbar === 'high-to-low'){
            itemsToDisplay = itemsToDisplay.sort((a, b) => (parseFloat(a.price) <= parseFloat(b.price)) ? 1 : -1);
        }

        return itemsToDisplay;
    }

    return (
        <div className='grid'>
            <Row className='grid-row'>
                {
                    applyFilters(items).map((item) => (
                        <Col 
                            className='grid-col' 
                            key={item.id} xl={4} lg={6} md={6} sm={6}>
                                <Card 
                                    img={item.imageUrl} 
                                    id={item.id} 
                                    item={item}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

const mapStatetoProps = createStructuredSelector({
    filters: selectSideBarFilters,
    keywords: selectSearchBarKeywords,
    sortbar: selectSortBar,
});

export default connect(mapStatetoProps)(ProductGrid);