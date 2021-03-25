import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems';
import Backdrop from '../UI/Backdrop';
import Auxiliar from '../../hoc/Auxiliar';
import './sidedrawer-style.css';

export default function Sidedrawer(props) {
      

    return (
        < Auxiliar>
          <Backdrop show={props.open} clicked={props.closedBackdrop} />
            <div
             className={`Sidedrawer ${props.open ? 'Open' : 'Close'}`}
            >
                <div className='LogoSidedrawer'>
                <Logo/>
                </div>
            
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxiliar>
    )
}
