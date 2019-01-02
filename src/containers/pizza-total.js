import React, { Component } from 'react'; 
import { connect } from 'react-redux';

class PizzaTotal extends Component {

  renderTotal() {
    let total = 0
    let currentPizzaTotal = 0
    for (let x = 0; x < this.props.addPizza.length; x++) {
      total = total + Number(this.props.addPizza[x]["pizzaTotal"])
    }
    let base = this.props.sizeSelected ? this.props.sizeSelected["basePrice"] : 0
    let totalToppings = this.props.totalToppings ? this.props.totalToppings["totalToppings"] : 0
    currentPizzaTotal = base + totalToppings
    return (
      <div className="col-xs-12">
        Current Pizza: ${this.formatNumbers(currentPizzaTotal)}<br />
        Cart Total: ${this.formatNumbers(total)}
      </div>
    );
  }

  render(){
    return (
      this.renderTotal()
    ); 
  }

  formatNumbers(num){
    return parseFloat(Math.round(num * 100) / 100).toFixed(2)
  }
}

function mapStateToProps(state){
  return {
    addPizza: state.addPizza,
    totalToppings: state.totalToppings,
    sizeSelected: state.sizeSelected,
  }; 
}

export default connect(mapStateToProps, null)(PizzaTotal);