import React, {PureComponent} from 'react'

export default class Categories extends PureComponent  {
  
  handleClick = (e) => {
    this.props.handleSubmit(e.target.value)
  }
 render() {
  return (
    <ul>
    { this.props.categories.map((c, index) => <button onClick={ this.handleClick } value={ c } className="button" key={ index }>{ c.toUpperCase() }</button>) }
    </ul>
  )
 }}