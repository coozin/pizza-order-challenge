import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

import { addPizza, clearSize, toppingsClear } from '../actions/index';

class PizzaCreate extends Component {

  render(){
    return (
      <button
        className="btn btn-success"
        disabled={!this.props.sizeSelected}
        onClick={() => this.createPizza()}
      >+ Add to cart</button>
    ); 
  }

  createPizza(){
    const size = this.props.sizeSelected["size"]
    const basePrice = this.props.sizeSelected["basePrice"]
    const toppingsSelected = this.props.totalToppings["toppingsSelected"]
    const toppingsPrice = this.props.totalToppings["totalToppings"]
    const pizzaTotal = Number(basePrice) + Number(toppingsPrice)
    this.props.addPizza(size, basePrice, toppingsSelected, toppingsPrice, pizzaTotal)
    this.props.clearSize()
    this.props.toppingsClear()
  }
}

function mapStateToProps(state){
  return {
    sizeSelected: state.sizeSelected,
    totalToppings: state.totalToppings,
  }; 
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addPizza: addPizza,
    clearSize: clearSize,
    toppingsClear: toppingsClear
  }, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCreate);