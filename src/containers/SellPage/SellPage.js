import React, { useRef, useState } from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SellPage.css';
import FormInput from '../../components/FormInput/FormInput';

const SellPage = (props) => {
    const file = useRef(null);

    const [ fullname, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ street, setStreet ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");
    const [ country, setCountry ] = useState("");
    const [ zip, setZip ] = useState("");
    const [ conditions, setConditions ] = useState("");
    const [ price, setPrice ]= useState("");
    const [checked, setChecked] = useState(false)

    const handleFileChange = (event) => {
        file.current = event.target.files[0];
    }

    const handleChecked = (event) => {
        setChecked(event.target.checked);
    }

    let formInfo = (
        <>
            <Row>
                <Col>
                    <FormInput 
                        label='Full Name'
                        name='fullname'
                        type='fullname'
                        value={fullname}
                        handleChange={ e => setName(e.target.value) }
                        required/>
                </Col>
                <Col>
                    <FormInput 
                        label='Email'
                        name='email'
                        type='email'
                        value={email}
                        handleChange={ e => setEmail(e.target.value) }
                        required/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormInput 
                        label='Street'
                        name='street'
                        type='street'
                        value={street}
                        handleChange={ e => setStreet(e.target.value) }
                        required/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormInput 
                        label='City'
                        name='city'
                        type='city'
                        value={city}
                        handleChange={ e => setCity(e.target.value) }
                        required/>
                </Col>
                <Col>
                    <FormInput 
                        label='State'
                        name='state'
                        type='state'
                        value={state}
                        handleChange={ e => setState(e.target.value) }
                        required/>
                </Col>
                <Col>
                    <FormInput 
                        label='Country'
                        name='country'
                        type='country'
                        value={country}
                        handleChange={ e => setCountry(e.target.value) }
                        required/>
                </Col>
                <Col>
                    <FormInput 
                        label='Zip'
                        name='zip'
                        type='zip'
                        value={zip}
                        handleChange={ e => setZip(e.target.value) }
                        required/>
                </Col>
            </Row>
            <Row>
                <Col lg={10} md={12}>
                    <FormInput 
                        label='Condition Description'
                        name='conditions'
                        type='conditions'
                        value={conditions}
                        handleChange={e => setConditions(e.target.value) }
                        required/>
                </Col>
                <Col lg={2} md={12}>
                    <Form.Control
                        as="select"
                        id="inlineFormCustomSelectPref"
                        custom
                    >
                        <option value="0">New</option>
                        <option value="1">Used</option>
                    </Form.Control>
                </Col>
            </Row>
        </>
    );

    let formPics = (
        <>
            <Form.Row>
                <Form.Group as={Col} controlId="hop">
                    <Form.Label>Box</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" />
                </Form.Group>
                <Form.Group as={Col} controlId="giay">
                    <Form.Label>Shoes + Nametag</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" />
                </Form.Group>
                <Form.Group as={Col} controlId="mui">
                    <Form.Label>Front</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="de">
                    <Form.Label>Bottom</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" />
                </Form.Group>
                <Form.Group as={Col} controlId="mong">
                    <Form.Label>Back</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" />
                </Form.Group>
                <Form.Group as={Col} controlId="ngoai">
                    <Form.Label>Outside</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="trong">
                    <Form.Label>Inside</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" />
                </Form.Group>
                <Form.Group as={Col} controlId="tem">
                    <Form.Label>Specs</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" />
                </Form.Group>
                <Form.Group as={Col} controlId="lot">
                    <Form.Label>Imperfections (Used Only)</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" />
                </Form.Group>
            </Form.Row>
        </>
    );

    return (
        <div className="sell-page">
            <img 
                alt="background"
                className="background" 
                src="assets/images/sell-page.jpg"
                style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
            />
            <Container style={{alignItems:'center'}}>
                <Form>
                    <h1 className="mb-5">SELL WITH US</h1>
                    {formInfo}
                    <h2>IMAGES OF THE SHOES (*)</h2>
                    {formPics}
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
                        <Col>
                            <Form.Check 
                            type="checkbox"
                            id="default-checkbox"
                            label="By checking this box, you understand that we'll collect 5% of each transaction as service fee"
                            style={{textAlign:'center'}}
                            onChange={handleChecked}/>
                        </Col>
                    </Row>
                    <Button 
                        className="mt-4"
                        variant="primary" 
                        type="submit" 
                        style={{float:'right'}}
                        size="lg"
                        disabled={!checked}
                    >
                        Submit
                    </Button>
                </Form>
                <Link to="/image-standards"><h6>(*) Click here to see our standards!</h6></Link>
            </Container>
        </div>
    );
};

export default SellPage;
