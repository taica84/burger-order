import React from 'react';
import './navigation-items-style.css';
import NavLinks from './NavLinks';

export default function NavigationItems() {
    return (
        <ul className='NavigationItems'>
           <NavLinks  link='/' active>Burger Builder </NavLinks>
           <NavLinks   link='/' >Checkout </NavLinks>
        </ul>
    )
}
