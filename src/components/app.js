import React, { Component } from 'react';

import PizzaSizes from '../containers/pizza-sizes';
import PizzaToppings from '../containers/pizza-toppings';
import PizzaTotal from '../containers/pizza-total';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://core-graphql.dev.waldo.photos/pizza"
});

let pizzaData = {}

client
  .query({
    query: gql`
    {
      pizzaSizes {
        toppings {
          topping {
            name
            price
          }
          defaultSelected
        }
        maxToppings
        name
        basePrice
      }
    }
    `
  })
  .then(result => {
    console.log(result)
    pizzaData = result
  });

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>Select the size of your pizza</h2>
          <PizzaSizes />
          <PizzaToppings />
          <PizzaTotal />
        </div>
      </ApolloProvider>
    );
  }
}
