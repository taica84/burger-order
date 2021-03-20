import React from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import './layout-style.css';

export default function Layout(props) {
    return (
        <Auxiliar>
            <div>
                Toolbar, Sidedrawer, Backdrop
            </div>
            <main className='content'>
                {props.children}
            </main>
        </Auxiliar>
    )
}
