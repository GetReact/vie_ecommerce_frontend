import React, { Component } from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SideBar from '../../components/SideBar/SideBar';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import { selectShopCollection } from '../../redux/shop/shop-selectors';
import "./ShopPage.css";

class ShopPage extends Component {

    state = {
        width: window.innerWidth,
    }

    handleWindowSizeChange() {
        this.setState({ width: window.innerWidth });
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange.bind(this))
    }

    render() {
        return (
            <div className="productpage">
                {   
                    this.state.width > 992 ? (
                        <>
                            <Col lg={4} md={12}>
                                <SideBar/>
                            </Col>
                            <Col lg={8} md={12} className="products">
                                <Row>
                                    <InputGroup className="search-bar">
                                        <FormControl
                                            placeholder="Search"
                                            aria-label="Search"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary">Search</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Row>
                                <Row className="product-grid">
                                    <ProductGrid items = { this.props.shoesCollection }/>
                                </Row>
                            </Col>
                        </>
                    )
                    : (
                        <>
                            <Row>
                                <Col md={12}><SideBar/></Col>
                                <Col md={12}><ProductGrid items = { this.props.shoesCollection }/></Col>
                            </Row>
                        </>
                    )
                }

            </div>
        );
    }
};

const mapStatetoProps = createStructuredSelector({
    shoesCollection: selectShopCollection,
});

export default connect(mapStatetoProps)(ShopPage);
