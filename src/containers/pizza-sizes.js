import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

import { selectSize } from '../actions/index'; 

import { Query } from "react-apollo";
import gql from "graphql-tag";

class PizzaSizes extends Component {

  renderList(){
    return <Query
      query={gql`
      {
        pizzaSizes {
          name
          basePrice
        }
      }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.pizzaSizes.map(({ name, basePrice }) => (
          <div key={name}>
            <button
              onClick={() => this.props.selectSize(name, basePrice)}
              className={`btn ${this.props.sizeSelected && this.props.sizeSelected['size'] === name ? 'btn-primary' : 'btn-default'}`}
            >{`Size: ${name}`}<br />{`Base Price: $${basePrice}`}</button>
          </div>
        ));
      }}
    </Query>;
  }

  render(){
    return (
      <ul className="list-group col-xs-4">
        {this.renderList()}
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
  return bindActionCreators({ selectSize: selectSize}, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaSizes);