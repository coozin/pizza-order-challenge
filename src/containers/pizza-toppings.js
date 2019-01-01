import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

import { totalToppings } from '../actions/index'; 

import { Query } from "react-apollo";
import gql from "graphql-tag";

class PizzaToppings extends Component {

  renderList(sizeSelected) {
    if (sizeSelected) {
      return <Query
        fetchPolicy="no-cache"
        query={gql`
        {
          pizzaSizeByName (name: ${sizeSelected}) {
            name
            basePrice
            maxToppings
            toppings {
              topping {
                name
                price
              }
              defaultSelected
            }
          }
        }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          let { maxToppings } = data.pizzaSizeByName;

          setTimeout(() => { this.getTotalChecked(maxToppings) }, 500);

          return data.pizzaSizeByName.toppings.map(({ topping, defaultSelected }) => (
            defaultSelected ?
            <p key={topping.name}>
              {topping.name} (+{topping.price})&nbsp;
              <input
                type="checkbox"
                name={topping.name}
                className="topping"
                value={topping.price}
                defaultChecked
                onClick={() => this.getTotalChecked(maxToppings)}
              />
            </p> :
            <p key={topping.name}>
              {topping.name} (+{topping.price})&nbsp;
              <input
                type="checkbox"
                name={topping.name}
                className="topping"
                value={topping.price}
                onClick={() => this.getTotalChecked(maxToppings)}
              />
            </p>
          ));
        }}
      </Query>;
    } else {
      return <div></div>
    }
  }

  getTotalChecked(maxToppings){
    var checkedValue = document.getElementsByClassName('topping')

    console.log('maxToppings', maxToppings)

    let total = 0;
    let totalChecked = 0;
    for (let x = 0; x < checkedValue.length; x++) {
      if(checkedValue[x].checked) {
        console.log(checkedValue[x].value)
        total += Number(checkedValue[x].value)
        totalChecked++;
      }
    }
    if (totalChecked === maxToppings) {
      for (let x = 0; x < checkedValue.length; x++) {
        if(!checkedValue[x].checked) {
          checkedValue[x].disabled = true;
        }
      }
    } else {
      for (let x = 0; x < checkedValue.length; x++) {
        checkedValue[x].disabled = false;
      }
    }
    console.log('total toppings: ', total)
    this.props.totalToppings(total)
  }

  render(){
    const size = this.props.sizeSelected && this.props.sizeSelected["size"] ? this.props.sizeSelected["size"].toUpperCase(): ``
    return (
      <ul className="list-group col-xs-4">
        {this.renderList(size)}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return {
    sizeSelected: state.sizeSelected
  }; 
}

function mapDispatchToProps(dispatch){
  console.log('dispatching totalToppings', dispatch)
  return bindActionCreators({totalToppings: totalToppings}, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaToppings);