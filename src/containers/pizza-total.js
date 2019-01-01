import React, { Component } from 'react'; 
import { connect } from 'react-redux';

class PizzaTotal extends Component {

  renderTotal() {
    const baseVal = this.props.sizeSelected ? this.props.sizeSelected["basePrice"] : 0;
    const totalToppings = this.props.totalToppings ? this.props.totalToppings["totalToppings"] : 0
    console.log('this.props.totalToppings: ', this.props.totalToppings)
    return `Total: $${baseVal + totalToppings}`;
  }

  render(){
    return (
      <ul className="list-group col-xs-4">
        {this.renderTotal()}
      </ul>
    ); 
  }
}

function mapStateToProps(state){
  return {
    sizeSelected: state.sizeSelected,
    totalToppings: state.totalToppings
  }; 
}

export default connect(mapStateToProps, null)(PizzaTotal);