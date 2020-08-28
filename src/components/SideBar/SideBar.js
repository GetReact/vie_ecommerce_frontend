import React from 'react'
import { Accordion, Button } from 'react-bootstrap';
import CatBar from './Accordion/CatBar/CatBar';
import SizeBar from './Accordion/SizeBar/SizeBar';
import PriceBar from './Accordion/PriceBar/PriceBar';
import ConditionBar from './Accordion/ConditionBar/ConditionBar';

const SideBar = () => {
    return (
        <>
            <Accordion className="accordion">
                <CatBar/>
                <PriceBar/>
                <SizeBar/>
                <ConditionBar/>
            </Accordion>
            <Button
                type="submit"
                style={{
                    marginTop:"1cm",
                    width:"4cm",
                    float:"right",
                    backgroundColor:"gray",
                    borderColor:"gray",
                }}
            >
                Apply Now
            </Button>
        </>
    )
}

export default SideBar;
