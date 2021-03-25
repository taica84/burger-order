import React from 'react';
import './toolbar-style.css';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems';
import SidedrawerToogle from './SidedrawerToogle';

export default function Toolbar(props) {
    return (
        <header className='Toolbar'>
             <SidedrawerToogle clicked={props.drawerToogle} />
            <div className='LogoToolbar'>
              <Logo/>
            </div>
           
            <nav className='DesktopOnly'>
               <NavigationItems/>
            </nav>
        </header>
    )
}
