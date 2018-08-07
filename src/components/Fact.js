import React, {PureComponent} from 'react'

export default class Fact extends PureComponent  {
  
  handleClick = (e) => {
    this.props.handleSubmit(e.target.value)
  }
 render() {
  return (
    <div className="fact_container">
    <div>
    <p>{ this.props.fact }</p>
    </div>
    </div>
  )
 }}