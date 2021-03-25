import React from 'react';
import './build-control.css';
import AddRemove from './AddRemove';


const controls = [
    {label:'Salad' , type:'salad'},
    {label:'Cheese' , type:'cheese'},
    {label:'Bacon' , type:'bacon'},
    {label:'Meat' , type:'meat'}
]

export default function BuildControl(props) {
    return (
        <div className='BuildControls'>
            <p>Current price :<strong>{props.price.toFixed(2)} </strong><em>$</em>  </p>
            {controls.map(ctrl => (
                <AddRemove 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() =>props.removeIngredients(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />
                ))}
           <button 
           className='OrderButton'
           disabled={!props.purchasable}
           onClick={props.ordered}
           >ORDER NOW</button>     
        </div>
    )
}
