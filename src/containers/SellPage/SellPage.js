import React, { useRef, useState } from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';

import { setLoading } from '../../redux/spinner/spinner-actions';

import { fireBaseMediaURL } from '../../config';
import './SellPage.css';
import FormInput from '../../components/FormInput/FormInput';

const SellPage = (props) => {
    const file = useRef(null);
    const history = useHistory();

    const [ name, setName ] = useState("");
    const [ seller, setSeller ] = useState("");
    const [ size, setSize ] = useState(10);
    const [ conditions, setConditions ] = useState("");
    const [ price, setPrice ]= useState("");
    const [ checked, setChecked ] = useState(false)

    const buttonIsValid = () => {
        const regex=/^[0-9]+$/;
        return (
            checked &&
            name.length > 0 &&
            seller.length > 0 &&
            price.match(regex)
        );
    }

    const handleFileChange = (event) => {
        file.current = event.target.files[0];
    }

    const handleChecked = (event) => {
        setChecked(event.target.checked);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            await axios({
                url: '/shoes',
                method: 'post',
                withCredentials: true,
                data: {
                    name,
                    seller,
                    price,
                    size,
                    conditions,
                    imageUrl:"https://firebasestorage.googleapis.com/v0/b/viecommerce.appspot.com/o/Nike%2FLebron-18.jpg?alt=media",
                }
            }).then(response => {
                const newShoes = response.data.shoesCollection;
                alert("Success: Your shoes is submitted for review!");
                console.log(newShoes);
                setLoading(false);
                history.push('/')
            }).catch(error => {
                alert(error.response.data.error);
                setLoading(false);
            });
        } catch(e) {
            console.log(e);
        }
    }

    let formInfo = (
        <>
            <Row>
                <Col lg={4} md={12}>
                    <FormInput 
                        label='Name'
                        name='name'
                        value={name}
                        handleChange={ e => setName(e.target.value) }
                        required/>
                </Col>
                <Col lg={4} md={12}>
                    <FormInput 
                        label='Seller'
                        name='seller'
                        value={seller}
                        handleChange={ e => setSeller(e.target.value) }
                        required/>
                </Col>
                <Col lg={4} md={12}>
                    <FormInput 
                        label='Condition'
                        name='conditions'
                        type='conditions'
                        value={conditions}
                        handleChange={ e => setConditions(e.target.value) }
                        required/>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={4}>
                    <Form.Control
                        as="select"
                        id="inlineFormCustomSelectPref"
                        custom
                        value={size} 
                        onChange={ e => setSize(e.target.value) }
                    >
                        {
                            [...Array(12).keys()].map(
                                key => <option key={key} value={key}>{key + 1}</option>
                            )
                        }
                    </Form.Control>
                </Col>
                <Col lg={4} md={4}>
                    <input onChange={ handleFileChange } type="file" id="myFile" name="filename"/>
                </Col>
                <Col lg={4} md={4}>
                    <Form.Control
                        as="select"
                        id="inlineFormCustomSelectPref"
                        custom
                        value={ conditions } 
                        onChange={ e => setConditions(e.target.value) }
                    >
                        <option value="new">New</option>
                        <option value="used">Used</option>
                    </Form.Control>
                </Col>
            </Row>
        </>
    );

    return (
        <div className="sell-page">
            <img 
                alt="background"
                className="background" 
                src={ fireBaseMediaURL('others%2Fsell-page.jpg')}
                style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
            />
            <Container style={{alignItems:'center'}}>
                <Form>
                    <h1 className="mb-5">SELL WITH US</h1>
                    {formInfo}
                    <Row>
                        <Col>
                            <FormInput 
                                label='Price'
                                name='price'
                                type='price'
                                value={price}
                                handleChange={e => setPrice(e.target.value) }
                                required/>
                        </Col>
                    </Row>
                    <Form.Check 
                        type="checkbox"
                        id="default-checkbox"
                        label="By checking this box, you understand that we'll collect 5% of each transaction as service fee"
                        style={{textAlign:'left'}}
                        onChange={handleChecked}/>
                    <Button 
                        variant="outline-primary" 
                        type="submit" 
                        size="lg"
                        style={{marginTop:'0.5cm'}}
                        disabled={ !buttonIsValid() }
                        onClick={ handleSubmit }
                    >
                        Submit
                    </Button>
                </Form>
                {/* <Link to="/image-standards"><h6>(*) Click here to see our standards!</h6></Link> */}
            </Container>
        </div>
    );
};

const mapDispatchtoProps = dispatch => ({
    setLoading: loadingState => dispatch(setLoading(loadingState)),
})

export default connect(null, mapDispatchtoProps)(SellPage);
