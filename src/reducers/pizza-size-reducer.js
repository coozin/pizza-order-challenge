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
        name
        basePrice
      }
    }
    `
  })
  .then(result => {
    pizzaData = result
  });

export default function(){
  if (pizzaData.data && pizzaData.data.pizzaSizes) {
    return [pizzaData.data.pizzaSizes]
  } else {
    return []
  }
}
