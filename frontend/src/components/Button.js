import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

export function Button(){
    return(
        <Link to='/sign-up'>
            <button className='sign_btn'><i className='fa fa-user'/>Name</button>
        </Link>
    );
}