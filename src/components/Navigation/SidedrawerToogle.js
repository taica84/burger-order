import React from 'react';
import './drawerToogle-style.css';

export default function SidedrawerToogle(props) {
    return (
        <div onClick={props.clicked} className='DrawerToggle ' >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
