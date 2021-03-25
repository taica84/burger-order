import React from 'react';
import './backdrop-style.css';

export default function Backdrop(props) {
    return (
      props.show ? <div className='Backdrop' onClick={props.clicked}></div> : null
    )
}
