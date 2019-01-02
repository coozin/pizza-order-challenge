import React, { Component } from 'react'; 
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class PizzaCreate extends Component {

  renderList(){
    let count = 0;
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

export default connect(mapStateToProps, null)(PizzaCreate);