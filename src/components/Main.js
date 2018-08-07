import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getCategories } from '../actions/categories'
import { loadFact } from '../actions/fact'
import Categories from './Categories'
import Fact from './Fact'




 class Main extends Component {
   getFact = (data) => {
    this.props.loadFact(data)
   }

componentDidMount() {
  this.props.getCategories()
}
    render() {
	   return (
       <div className="container">
       <h1>Chuck Norris Facts</h1>
        {!this.props.categories ? <p>Loading Categories</p> : <Categories categories={ this.props.categories} handleSubmit={ this.getFact }/>}
        {!this.props.fact ? <p>Loading Fact</p> : <Fact fact={ this.props.fact.value} /> }
       </div>
     )
}
 }
    const mapStateToProps = (state) => {

      return {
        categories: state.categories.error,
        fact: state.fact
      }
    }

export default connect(mapStateToProps, {getCategories, loadFact})(Main)
