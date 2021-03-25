import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Burger from '../../components/BurgerIngredients/Burger';
import BuildControl from '../../components/BurgerIngredients/BuildControl';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/BurgerIngredients/OrderSummary';

const INGREDIENT_PRICES = {
    salad : 0.5 ,
    cheese : 0.4 ,
    meat : 1.3 ,
    bacon : 0.7
}

export default class BurgerBuilder extends Component {
     constructor(props) {
         super(props);

         this.state = {
             ingredients : {
                 salad : 0 ,
                 bacon :0 , 
                 cheese : 0 ,
                 meat : 0
             },
             totalPrice: 2,
             purchasable:false,
             ordering : false
         }
     };

      updatePurchaseState(ingredients) {
        
          const sum = Object.keys(ingredients).map(igKey => {
               return ingredients[igKey];
          }).reduce((sum,el) => {
              return sum + el ;
          } , 0);
          this.setState({purchasable : sum > 0}) 
      }


     addIngredientHandler = (type) => {
          const oldCount = this.state.ingredients[type];
          const updatedCount = oldCount + 1;
          const updatedIngredients = {
              ...this.state.ingredients
          }
          updatedIngredients[type]= updatedCount;
          const priceAddition = INGREDIENT_PRICES[type];
          const oldPrice = this.state.totalPrice;
          const newPrice = oldPrice + priceAddition;
          this.setState({
              ingredients:updatedIngredients,
              totalPrice:newPrice
          })
    this.updatePurchaseState(updatedIngredients);
     };

     removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type]= updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice
        })
        this.updatePurchaseState(updatedIngredients);
     };

     purchaseHandler = () => {
         this.setState({ordering:true})
     }

     orderingCancel = () => {
         this.setState({ordering:false})
     }

     orderingContinue = () => {
         alert('Continue to ....')
     }

    

    render() {
          const disabledInfo = {
              ...this.state.ingredients
          };
          for(let key in disabledInfo) {
              disabledInfo[key] = disabledInfo[key] <= 0;
          }

        return (
            <Auxiliar>
                <Modal 
                show={this.state.ordering}
                modalClosed={this.orderingCancel} 
                >
                    <OrderSummary
                      ingredients={this.state.ingredients}
                      orderCancel={this.orderingCancel}
                      orderContinue={this.orderingContinue}
                      price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControl 
                 ingredientAdded={this.addIngredientHandler}
                 removeIngredients={this.removeIngredientHandler}
                 disabled={disabledInfo}
                 purchasable={this.state.purchasable}
                 price={this.state.totalPrice}
                 ordered={this.purchaseHandler}
                 />
                
            </Auxiliar>
        ) 
    }
}
