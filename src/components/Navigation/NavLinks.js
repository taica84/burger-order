import React from 'react';
import './nav-links-style.css';

export default function NavLinks(props) {
    return (
        <li className='NavLinks'>
            <a
            className={props.active ? 'active' : null }
             href={props.link}
             > {props.children} </a>
        </li>
    )
}
