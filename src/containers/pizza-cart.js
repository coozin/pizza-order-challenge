import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removePizza } from '../actions/index'; 

class PizzaCreate extends Component {

  constructor() {
    super();

    this.state = {
      showDetails: false
    }
  }

  renderList(){
    let count = -1;
    return this.props.addPizza.map(({ size, base, toppingsSelected, toppingsPrice, pizzaTotal }) => (
      <div key={count++}>
        Pizza {count + 1}
        { this.state.showDetails ? 
          <ul>
            <li>SIZE: {size}</li>
            <li>BASE PRICE: {base}</li>
            {toppingsSelected.map((item) => (
              <ol key={item}>{item}</ol>
            ))}
            <li>TOPPINGS TOTAL PRICE: {this.formatNumbers(toppingsPrice)}</li>
            <li>PIZZA TOTAL: {this.formatNumbers(pizzaTotal)}</li>
          </ul> : null
        }
        <button
          className="btn btn-primary"
          onClick={() => this.showDetails()}
        >{this.state.showDetails ? 'Hide' : 'Show'} Details</button>
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
  console.log('dispatching removePizza', dispatch)
  return bindActionCreators({removePizza: removePizza}, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCreate);