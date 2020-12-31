import React, { useRef, useState } from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { axios_instance as axios, fireBaseMediaURL } from '../../config';
import { auth, storage } from '../../firebase/firebase';

import { updateCollections } from '../../redux/shop/shop-actions';
import { selectShoesCollection } from '../../redux/shop/shop-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { setLoading } from '../../redux/spinner/spinner-actions';

import './SellPage.css';
import FormInput from '../../components/FormInput/FormInput';

const SellPage = ({ shoesCollection, updateCollections }) => {
    const file = useRef(null);
    const history = useHistory();

    const [ fileAdded, setFileAdded ] = useState(file.current != null);
    const [ name, setName ] = useState("");
    const [ seller, setSeller ] = useState("");
    const [ size, setSize ] = useState("");
    const [ conditions, setConditions ] = useState("");
    const [ price, setPrice ]= useState("");
    const [ checked, setChecked ] = useState(false)

    const buttonIsValid = () => {
        const regex=/^[0-9]+$/;
        return (
            fileAdded && checked &&
            name.length > 0 &&
            seller.length > 0 &&
            price.match(regex) &&
            size.match(regex) &&
            (conditions === 'new' || conditions === 'old')
        );
    }

    const handleFileChange = (event) => {
        file.current = event.target.files[0];
        setFileAdded(file.current != null);
    }

    const handleChecked = (event) => {
        setChecked(event.target.checked);
    }

    const createImage = async (jwtToken, imageUrl) => {
        axios({
            url: '/shoes',
            method: 'post',
            headers: {
                'Authorization': jwtToken
            },
            data: {
                name,
                seller,
                price: parseFloat(price),
                size: parseInt(size),
                condition: conditions,
                imageUrl: imageUrl,
            }
        }).then(response => {
            const newShoes = response.data.shoes;
            alert("Success: Your shoes is submitted for review!");
            console.log(newShoes);
            updateCollections([
                newShoes,
                ...shoesCollection
            ]);
            setLoading(false);
            history.push('/')
        }).catch(error => {
            alert(error.response.data.error);
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        
        if (!auth.currentUser) {
            alert('You have to log in first!')
            return;
        }

        const storageRef = storage.ref(`collection/${file.current.name}`);

        storageRef.put(file.current)
                .then(async () => {
                    const imageUrl = await storageRef.getDownloadURL();
                    console.log(imageUrl);

                    const jwtToken = await auth.currentUser.getIdToken();

                    await createImage(jwtToken, imageUrl);
                }).catch(error => {
                    console.log(error);
                    alert('An error happened!')
                });

        setLoading(false);
    }

    let formInfo = (
        <>
            <Row>
                <Col>
                    <FormInput 
                        label='Name'
                        name='name'
                        value={name}
                        handleChange={ e => setName(e.target.value) }
                        required/>
                </Col>
                <Col>
                    <FormInput 
                        label='Seller'
                        name='seller'
                        value={seller}
                        handleChange={ e => setSeller(e.target.value) }
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
                        <option>Size</option>
                        {
                            [...Array(12).keys()].map(
                                key => <option key={key} value={key}>{key + 1}</option>
                            )
                        }
                    </Form.Control>
                </Col>
                <Col lg={4} md={4}>
                    <input 
                        onChange={ handleFileChange } 
                        type="file" 
                        id="myFile" 
                        name="filename"
                        accept='image/*'/>
                </Col>
                <Col lg={4} md={4}>
                    <Form.Control
                        as="select"
                        id="inlineFormCustomSelectPref"
                        custom
                        value={ conditions } 
                        onChange={ e => setConditions(e.target.value) }
                    >
                        <option>Condition</option>
                        <option value="new">New</option>
                        <option value="old">Old</option>
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

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    shoesCollection: selectShoesCollection,
});

const mapDispatchtoProps = dispatch => ({
    setLoading: loadingState => dispatch(setLoading(loadingState)),
    updateCollections: collection => dispatch(updateCollections(collection)),
})

export default connect(mapStatetoProps, mapDispatchtoProps)(SellPage);
