import React, { Component } from 'react';
import './modal-style.css';
import Auxiliar from '../../hoc/Auxiliar';
import Backdrop from '../UI/Backdrop';

export default class Modal extends Component {
     
    shouldComponentUpdate ( nextProps , nextState) {
        return nextProps.show !== this.props.show ;
    }


    render() {
        return (
            <Auxiliar>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                className='Modal'
                style={{
                    transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity:this.props.show ? '1' : '0'
                 }}
                >
                    {this.props.children}
                </div>
            </Auxiliar>
        )
    }
}









// import React from 'react';
// import './modal-style.css';
// import Auxiliar from '../../hoc/Auxiliar';
// import Backdrop from '../UI/Backdrop';

// export default function Modal(props) {
//     return (
//         <Auxiliar>
//             <Backdrop show={props.show} clicked={props.modalClosed} />
//             <div 
//             className='Modal'
//             style={{
//                 transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
//                 opacity:props.show ? '1' : '0'
//             }}
//             >
//                 {props.children}
//             </div>
//         </Auxiliar>
//     )
// }
