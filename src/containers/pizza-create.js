import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

import { addPizza, clearSize } from '../actions/index';

class PizzaCreate extends Component {

  render(){
    return (
      <button
        className="btn btn-primary"
        disabled={!this.props.sizeSelected}
        onClick={() => this.createPizza()}
      >Add pizza to cart</button>
    ); 
  }

  createPizza(){
    const size = this.props.sizeSelected["size"]
    const basePrice = this.props.sizeSelected["basePrice"]
    const toppingsSelected = this.props.totalToppings["toppingsSelected"]
    const toppingsPrice = this.props.totalToppings["totalToppings"]
    const pizzaTotal = Number(basePrice) + Number(toppingsPrice)
    this.props.addPizza(size, basePrice, toppingsSelected, toppingsPrice, pizzaTotal)
    console.log('size, basePrice, toppingsSelected, toppingsPrice, pizzaTotal', size, basePrice, toppingsSelected, toppingsPrice, pizzaTotal)
    this.props.clearSize()
  }
}

function mapStateToProps(state){
  return {
    sizeSelected: state.sizeSelected,
    totalToppings: state.totalToppings,
  }; 
}

function mapDispatchToProps(dispatch){
  console.log('dispatching addPizza', dispatch)
  return bindActionCreators({
    addPizza: addPizza,
    clearSize: clearSize
  }, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCreate);