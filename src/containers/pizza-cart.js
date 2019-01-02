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
      <div className="col-xs-12 my-margin" key={count++} ref={count}>
        <div className="my-float">Pizza {number++}</div>
        <PizzaCartItem
          size={size}
          base={base}
          toppingsSelected={[...toppingsSelected]}
          toppingsPrice={this.formatNumbers(toppingsPrice)}
          pizzaTotal={this.formatNumbers(pizzaTotal)}
        />
        <button
          className="btn btn-danger my-float"
          onClick={this.handleRemove.bind(this, count)}
          hand
        >x</button>
      </div>
    ));
  }

  render(){
    return (
      <div>
        <div className="col-xs-12">Your cart</div>
        {this.renderList()}
      </div>
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