import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removePizza } from '../actions/index'; 

class PizzaCreate extends Component {

  renderList(){
    let count = -1;
    return this.props.addPizza.map(({ size, base, toppingsSelected, toppingsPrice, pizzaTotal }) => (
      <div key={count++}>
        <ul>
          <li>SIZE: {size}</li>
          <li>BASE PRICE: {base}</li>
          {toppingsSelected.map((item) => (
            <ol key={item}>{item}</ol>
          ))}
          <li>TOPPINGS TOTAL PRICE: {toppingsPrice}</li>
          <li>PIZZA TOTAL: {pizzaTotal}</li>
        </ul>
        <button
          className="btn btn-danger"
          onClick={() => this.props.removePizza(count)}
        >Remove item</button>
      </div>
    ));
  }

  render(){
    return (
      <ul className="list-group col-xs-4">
        {this.renderList()}
      </ul>
    ); 
  }
}

function mapStateToProps(state){
  return {
    addPizza: state.addPizza
  };
}

function mapDispatchToProps(dispatch){
  console.log('dispatching removePizza', dispatch)
  return bindActionCreators({removePizza: removePizza}, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCreate);