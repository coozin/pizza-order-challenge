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
          <button
            key={name}
            onClick={() => this.props.selectSize(name, basePrice)}
            type="button"
            className={`${this.props.sizeSelected && this.props.sizeSelected['size'] === name ? 'btn btn-primary' : 'btn test'}`}
          >{`${name} (Starting at $${basePrice})`}</button>
        ));
      }}
    </Query>;
  }

  render(){
    return (
      <div className="col-xs-4">
        Select a size<br />
        {this.renderList()}
      </div>
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