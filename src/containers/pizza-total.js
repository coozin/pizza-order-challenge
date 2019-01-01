import React, { Component } from 'react'; 
import { connect } from 'react-redux';

class PizzaTotal extends Component {

  renderTotal() {
    const baseVal = this.props.sizeSelected ? this.props.sizeSelected["basePrice"] : 0;
    return `Total: $${baseVal}`;
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
    sizeSelected: state.sizeSelected
  }; 
}

export default connect(mapStateToProps, null)(PizzaTotal);