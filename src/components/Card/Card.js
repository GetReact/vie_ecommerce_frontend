import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { addItem } from '../../redux/cart/cart-action';
import { connect } from 'react-redux';
import './Card.css';

const MyCard = (props) => (
    <div key={props.id} className="card-item">
        <div className='card-body'>
            <div>
                <Link to={`/details/${props.id}`}>
                    <img src={props.img} alt="product"/>
                </Link>
            </div>
            { props.item.condition.toLowerCase() === 'new'
            ? (
                <div 
                    className='card-condition-tag'
                    style={ { background:'#fff675' } }>
                        New
                </div>
            ) : (
                <div 
                    className='card-condition-tag'
                    style={ { background:'#db7272' } }>
                        Old
                </div>
            ) }
            
            <div className='cart-btn'>
                <svg 
                    width="2.5em" height="2.5em" viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg" 
                    style={{padding:'0px 5px 0px 5px'}}
                    onClick={() => props.addItem(props.item)}>
                        <path fillRule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"/>
                        <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
            </div>
        </div>
        <div className="card-footer">
            <span className='card-name'>{props.item.name}</span>
            <span className='card-price'>${props.item.price} </span>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(MyCard));
