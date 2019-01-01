import React, { Component } from 'react';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://core-graphql.dev.waldo.photos/pizza"
});

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
  .then(result => console.log(result));

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app 🚀</h2>
        </div>
      </ApolloProvider>
    );
  }
}
