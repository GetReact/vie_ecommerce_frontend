import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

import { axios_instance as axios } from '../../config';

import { setLoading } from '../../redux/spinner/spinner-actions';
import { addItem } from '../../redux/cart/cart-action';

import './DetailPage.css';

class DetailPage extends Component {
    state = {
        shoes: null,
    };

    _isMounted = false;

    fetchShoes = null;

    componentDidMount() {
        const { setLoading, match } = this.props;
        this._isMounted = true;
        setLoading(true);
        this.fetchShoes = async () => {
            // console.log(match.params.id)
            const fetch_shoes = await axios({
                url: `/shoes/${match.params.id}`,
                method: 'get',
                withCredentials: true,
            }).then(response => {
                return response.data.shoes;
            }).catch(error => {
                console.log(error.response.data.error);
                // alert(error.response.data.error);
                return null;
            });
            console.log(fetch_shoes);
            if (this._isMounted) {
                this.setState({ shoes: fetch_shoes });
            }
            setLoading(false);
        }
        
        this.fetchShoes();
    }

    componentWillUnmount() {
        this._isMounted = false;
        this.fetchShoes();
    }

    render() {
        const { shoes } = this.state;
        return (
            <Container className="detail-page">
                <LinkContainer to="/shop">
                    <Button variant="outline-info">Back to shopping</Button>
                </LinkContainer>
                <Row className="detail-grid">
                    <Col className="column1" lg={6}>
                        <Image
                            className="main-shoes-img" 
                            alt="shoes-img" 
                            src={ shoes ? shoes.imageUrl : '/assets/images/shoes-img/shoes4.jpg' }
                            width="70%"/>
                    </Col>
                    <Col className="column2" lg={6}>
                        <h1>{ shoes ? shoes.name : 'nothing' }</h1>
                        <Row className="shoes-info"><h5>Brand:</h5><h5 className="info">{ shoes ? shoes.seller : 'nothing' }</h5></Row>
                        <Row className="shoes-info"><h5>Price:</h5><h5 className="info">${ shoes ? shoes.price : 'nothing' }</h5></Row>
                        <Row className="shoes-info"><h5>Size:</h5><h5 className="info">{ shoes ? shoes.size : 'nothing' }</h5></Row>
                        <Row className="shoes-info"><h5>Condition:</h5><h5 className="info">{ shoes ? shoes.condition.toUpperCase() : 'nothing' }</h5></Row>
                        <Row className="shoes-info"><h5>Descriptions:</h5></Row>
                        <Row className="shoes-info"><h6>"This is the space where shoes owners describe their shoes in more details. It can be either your past experiences with the shoes or any issue-related information."</h6></Row>
                    </Col>
                </Row>
                <Button 
                    className="add-to-cart-btn" 
                    variant="outline-success"
                    onClick={ () => this.props.addItem(shoes) }
                >
                    Add to cart
                </Button>
            </Container>
        );
    };
};

const mapDispatchtoProps = dispatch => ({
    setLoading: loadingState => dispatch(setLoading(loadingState)),
    addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchtoProps)(withRouter(DetailPage));