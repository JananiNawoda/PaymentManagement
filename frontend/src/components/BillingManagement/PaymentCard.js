import React from 'react';
import {Link} from 'react-router-dom';
import './PaymentCard.css';

export default function Payments(props){
    return(
        <div className='card'>
            <div className='overflow'>
                <img src={props.imgURL} alt='Payments'/>
            </div>
            <div className='card-body'>
                <div className='card-title'>
                    <h4>{props.title}</h4>
                </div>
                <div className='card-text'> 
                    <p>{props.text}</p>
                </div>
                <div className='btn'>
                    <Link to={props.URLpath}>
                        <button>Go<i className='fas fa-arrow-circle-right'/></button>
                    </Link>
                </div>
            </div>
        </div>
    );
}