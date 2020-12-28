import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSideBarFilters } from '../../redux/sidebar/sidebar-selectors';
import Card from '../Card/Card';
import './ProductGrid.css';

const ProductGrid = ({ items, filters }) => {
    const applyFilters = (items) => {
        const itemsToDisplay = items.filter(
            item =>
                parseFloat(filters.minPrice) < parseFloat(item.price) && parseFloat(item.price) <= parseFloat(filters.maxPrice) && 
                parseFloat(filters.minSize) <= parseFloat(item.size) && parseFloat(item.size) <= parseFloat(filters.maxSize) &&
                (filters.brands.includes(item.seller.toLowerCase()) || filters.brands.length === 0) && 
                (filters.conditions.includes(item.condition) || filters.conditions.length === 0)
        );

        // console.log(itemsToDisplay);
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
                                        item={item}
                                />
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

const mapStatetoProps = createStructuredSelector({
    filters: selectSideBarFilters
});

export default connect(mapStatetoProps)(ProductGrid);