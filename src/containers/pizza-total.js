import React, { Component } from 'react'; 
import { connect } from 'react-redux';

class PizzaTotal extends Component {

  renderTotal() {
    let total = 0
    for (let x = 0; x < this.props.addPizza.length; x++) {
      total = total + Number(this.props.addPizza[x]["pizzaTotal"])
    }
    return `Cart Total: $${total}`;
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
    addPizza: state.addPizza
  }; 
}

export default connect(mapStateToProps, null)(PizzaTotal);