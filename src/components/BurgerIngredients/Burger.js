import React from 'react';
import './burger.css';
import BurgerIngredients from './BurgerIngredients';

export default function Burger(props) {
   let transformIngredients = Object.keys(props.ingredients).map(igKey => {
           return [...Array(props.ingredients[igKey])].map((_, i) => {
              return <BurgerIngredients key={igKey + i} type={igKey} />
           })
       }) 

       .reduce((arr , el) => {
           return arr.concat(el)
       },[]);
       
        if(transformIngredients.length === 0) {
            transformIngredients = <p>Please start adding ingredients</p> 
        }

       console.log(transformIngredients)

    return (
        <div className='Burger'>
            <BurgerIngredients  type='bread-top' />
            {transformIngredients}
            <BurgerIngredients  type='bread-bottom' />
        </div>
    )
}
