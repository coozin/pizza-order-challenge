import React, { Component } from 'react'; 
import { connect } from 'react-redux';

class PizzaCartItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    }
  }

  renderList(){
    const {size, base, toppingsSelected, toppingsPrice, pizzaTotal} = this.props;
    return (
      <ul className="list-group">
        <li>SIZE: {size}</li>
        <li>BASE PRICE: {base}</li>
        {toppingsSelected.map((item) => (
          <ol key={item}>{item}</ol>
        ))}
        <li>TOPPINGS TOTAL PRICE: {toppingsPrice}</li>
        <li>PIZZA TOTAL: {pizzaTotal}</li>
      </ul>
    );
  }

  render(){
    return (
    <div className="my-float">
      <button
        className="btn btn-primary"
        onClick={() => this.showDetails()}
      >{this.state.showDetails ? 'Hide Details ▲' : 'Show Details ▼'}  </button>
      {this.state.showDetails ? this.renderList() : null}
    </div>
    ); 
  }

  showDetails() {
    this.setState({ showDetails: !this.state.showDetails });
  }
}

export default connect(null, null)(PizzaCartItem);