import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import './layout-style.css';
import Toolbar from '../Navigation/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer';

export default class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSidedrawer : false
        }
    }

    sidedrawerClosedBackdrop = () => {
        this.setState({showSidedrawer:false})
    };

    sidedrawerToogle = () => {
        this.setState((prevState) => {
          return {showSidedrawer : !prevState.showSidedrawer}
        });
    }

    render() {
        return (
            <Auxiliar>
                 <Toolbar drawerToogle={this.sidedrawerToogle} />
                    <Sidedrawer
                    open={this.state.showSidedrawer}
                    closedBackdrop={this.sidedrawerClosedBackdrop} />
                     <main className='Content'>
                       {this.props.children}
                    </main>
                    <footer className='Footer'>
                        <p>Created by <em>Taica Rullz</em></p>
                    </footer>
             </Auxiliar>
        )
    }
}


// import React from 'react';
// import Auxiliar from '../../hoc/Auxiliar';
// import './layout-style.css';
// import Toolbar from '../Navigation/Toolbar';
// import Sidedrawer from '../Navigation/Sidedrawer';

// export default function Layout(props) {
//     return (
//         <Auxiliar>
//             <Toolbar/>
//             <Sidedrawer/>
//             <main className='content'>
//                 {props.children}
//             </main>
//         </Auxiliar>
//     )
// }

