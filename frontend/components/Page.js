import React, { Component, Fragment } from 'react'
import Header from './Header'
import Meta from './Meta'

export default class Page extends Component {
  render() {
    return (
      <Fragment>   
      <Meta />
      <Header />
      {this.props.children}
      </Fragment>
    )
  }
}
