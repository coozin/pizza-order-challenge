import React, { Component } from 'react'; 
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; 

// import { selectSize } from '../actions/index'; 

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

          return data.pizzaSizeByName.toppings.map(({ topping, defaultSelected }) => (
            defaultSelected ?
            <p key={topping.name}>
              {topping.name} (+{topping.price})&nbsp;
              <input type="checkbox" name={topping.name} value="Topping" defaultChecked />
            </p> :
            <p key={topping.name}>
              {topping.name} (+{topping.price})&nbsp;
              <input type="checkbox" name={topping.name} value="Topping" />
            </p>
          ));
        }}
      </Query>;
    } else {
      return <div></div>
    }
  }

  /* componentWillUpdate(){
    const size = this.props.sizeSelected && this.props.sizeSelected["size"] ? this.props.sizeSelected["size"].toUpperCase(): ``
    console.log('componentWillUpdate pizza toppings. size: ', size)
    //this.renderList(size)
    if (size && size.length !== 0) {
      console.log(size)
      console.log('entered')
    }
  } */

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

/* function mapDispatchToProps(dispatch){
  return bindActionCreators({selectSize: selectSize}, dispatch); 
} */

export default connect(mapStateToProps, null)(PizzaToppings);