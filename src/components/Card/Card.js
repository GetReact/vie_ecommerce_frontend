import React from 'react';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './Card.css';

const MyCard = (props) => (
        <Card key={props.id} className="card-item">
            <Card.Body className="p-5">
                <Link to={`/details/${props.id}`}>
                    <img 
                        className="card-img-top" 
                        src={props.img} alt="product"
                    />
                </Link>
                <svg 
                    className="cart-btn" 
                    width="2.5em" height="2.5em" viewBox="0 0 16 16" fill="black" 
                    xmlns="http://www.w3.org/2000/svg" 
                    style={{padding:'0px 5px 0px 5px'}}
                    onClick={() => {
                        alert(`added this item to cart`)
                    }}>
                        <path fillRule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"/>
                        <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
            </Card.Body>
            <Card.Footer className="card-footer d-flex justify-content-between">
                <span>{props.name}</span>
                <span>$ {props.price} </span>
            </Card.Footer>
        </Card>
);

export default withRouter(MyCard);
