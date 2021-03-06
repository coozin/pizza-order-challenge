import React, { Component } from 'react';

import PizzaSizes from '../containers/pizza-sizes';
import PizzaToppings from '../containers/pizza-toppings';
import PizzaTotal from '../containers/pizza-total';
import PizzaCreate from '../containers/pizza-create';
import PizzaCart from '../containers/pizza-cart';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://core-graphql.dev.waldo.photos/pizza"
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>Pizza Builder 🍕</h2>
          <div className="row">
            <PizzaSizes />
            <PizzaToppings />
            <PizzaCreate />
          </div>
          <div className="row">
            <PizzaCart />
            <PizzaTotal />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
