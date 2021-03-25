import React from 'react';
import  burgerLogo from '../../assets/images/burgerLogo.png'; 
import './logo-style.css' ;

export default function Logo(props) {
    return (
        <div className='Logo' >
            <img  src={burgerLogo} alt='burger-logo ' />
        </div>
    )
}
