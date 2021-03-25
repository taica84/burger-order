import React from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Button from '../UI/Button';

export default function OrderSummary(props) {
      const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
          return <li key={igKey} >
              <span style={{textTransform:'capitalize'}} >
               {igKey}: {props.ingredients[igKey]} 
              </span>
              </li>
      })

    return (
        <Auxiliar>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.price.toFixed(2)} </strong></p>
            <p>Continue To Checkout?</p>
            <Button btnType='Danger' clicked={props.orderCancel} >CANCEL</Button>
            <Button btnType='Success' clicked={props.orderContinue} >CONTINUE</Button>
        </Auxiliar>
    )
}
