import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { Slider } from '@material-ui/core';

const PriceBar = () => {
    const [value, setValue] = useState([0, 100]);
    const [maxVal, setMaxVal] = useState(1000)
    const [minVal, setMinVal] = useState(50)

    const handleChange = (event, newValue) => {
        setValue(newValue);
        const min = newValue[0]/100*950+50;
        const max = newValue[1]/100*950+50;
        setMaxVal(max);
        setMinVal(min);
    };

    return (
        <Card className="pricebar">
            <Accordion.Toggle as={Card.Header} eventKey="1">
                Price
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <Slider
                        style={{width:"90%", left:'5%', right:'5%',}}
                        value={value}
                        onChange={handleChange}
                        aria-labelledby="range-slider"/>
                </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
                <Card.Body style={{textAlign:"center",}}>
                    <h6>${minVal} &lt; Current &lt; ${maxVal}</h6>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

export default PriceBar;
