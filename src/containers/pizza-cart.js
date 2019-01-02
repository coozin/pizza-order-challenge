import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removePizza } from '../actions/index';

import PizzaCartItem from './pizza-cart-item';

class PizzaCreate extends Component {

  constructor() {
    super();

    this.state = {
      showDetails: false
    }
  }

  renderList(){
    let count = -1;
    let number = 1;
    return this.props.addPizza.map(({ size, base, toppingsSelected, toppingsPrice, pizzaTotal }) => (
      <div key={count++} ref={count}>
        Pizza {number++}
        <button
          className="btn btn-danger"
          onClick={this.handleRemove.bind(this, count)}
          hand
        >Remove item</button>
        <PizzaCartItem
          size={size}
          base={base}
          toppingsSelected={[...toppingsSelected]}
          toppingsPrice={this.formatNumbers(toppingsPrice)}
          pizzaTotal={this.formatNumbers(pizzaTotal)}
        />
      </div>
    ));
  }

  /* { this.state.showDetails ? 
          <ul>
            <li>SIZE: {size}</li>
            <li>BASE PRICE: {base}</li>
            {toppingsSelected.map((item) => (
              <ol key={item}>{item}</ol>
            ))}
            <li>TOPPINGS TOTAL PRICE: {this.formatNumbers(toppingsPrice)}</li>
            <li>PIZZA TOTAL: {this.formatNumbers(pizzaTotal)}</li>
          </ul> : null
          } */

  render(){
    return (
      <ul className="list-group col-xs-12">
        {this.renderList()}
      </ul>
    ); 
  }

  handleRemove(i) {
    this.props.removePizza(i)
  }

  showDetails() {
    this.setState({ showDetails: !this.state.showDetails });
  }

  formatNumbers(num){
    return parseFloat(Math.round(num * 100) / 100).toFixed(2)
  }
}

function mapStateToProps(state){
  return {
    addPizza: state.addPizza
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({removePizza: removePizza}, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCreate);