import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Link extends Component {
  render() {
    return (
      <NavLink to={ this.props.to } style={{textDecoration:"none"}} activeClassName="activeNavLink" className="inactiveNavLink">
        { this.props.icon }<span className="ml-1"> { this.props.text } </span> 
      </NavLink>
    )
  }
}


export default Link
