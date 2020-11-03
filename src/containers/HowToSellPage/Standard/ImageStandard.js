import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import { fireBaseMediaURL } from '../../../config';

import StandardCard from './StandardCard';
import './ImageStandard.css';

export default class ImageStandard extends Component {
    render() {
        return (
            <Container className="image-standard">
                <h1 className ="first-line text-center" style={{color:'white'}}>
                    MAKE SURE YOUR UPLOADS
                </h1>
                <h1 className ="text-center" style={{color:'yellow'}}>
                    INCLUDE THE FOLLOWING THINGS  
                </h1>
                <Row>
                    <StandardCard 
                        title="1. Box"
                        img={ fireBaseMediaURL('how-to-sell%2Fstandard%2Fbox.jpg') }/> 
                    <StandardCard 
                        title="2. Nametag"
                        img={ fireBaseMediaURL('how-to-sell%2Fstandard%2Fnametag.jpg') }/>
                </Row>
                <Row>
                    <StandardCard 
                        title="3. Front"
                        img={ fireBaseMediaURL('how-to-sell%2Fstandard%2Fmui.jpg') }/>
                    <StandardCard 
                        title="4. Bottom"
                        img={ fireBaseMediaURL('how-to-sell%2Fstandard%2Fde.jpg') }/>
                </Row>
                <Row>
                    <StandardCard 
                        title="5. Back"
                        img={ fireBaseMediaURL('how-to-sell%2Fstandard%2Fdit.jpg') }/>
                    <StandardCard 
                        title="6. Outside"
                        img={ fireBaseMediaURL('how-to-sell%2Fstandard%2Fngoai.jpg') }/>
                </Row>
                <Row>
                    <StandardCard 
                        title="7. Inside"
                        img={ fireBaseMediaURL('how-to-sell%2Fstandard%2Ftrong.jpg') }/>
                    <StandardCard 
                        title="8. Specs"
                        img={ fireBaseMediaURL('how-to-sell%2Fstandard%2Ftem.jpg') }/>
                </Row>
                <Row>
                    <StandardCard 
                        title="9. Imperfections"
                        img={ fireBaseMediaURL('how-to-sell%2Fstandard%2Fkhiemkhuyet.jpg') }/>
                </Row>
            </Container>
        )
    }
}
