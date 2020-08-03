import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './ProfileButton.css';

const ProfileButton = (props) => {
    return (
        <Card className="profile-button">
            <Row>
                <Col lg={4}>
                    <img 
                        width="50cm"
                        alt={props.title} 
                        src={props.img}/>
                </Col>
                <Col lg={8}>
                    <Card.Body>{props.body}</Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default ProfileButton;