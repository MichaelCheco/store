import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class Item extends Component {
  render() {
    const { item } = this.props
    return (
      <div>
      {item.image && <img src={item.image} alt={image.title} />}
      <Link
        href={{
          pathname: '/item',
          query: { id: item.id },
        }}
        >
          <a>{item.title}</a>
        </Link>
        <p>{item.price}</p>
        <p>{item.description}</p>
        <Link
          href={{
            pathname: 'update',
            query: { id: item.id },
          }}>
            <a>Edit</a>
          </Link>
          <button>add to cart</button>
          <button>delete</button>
      </div>
    )
  }
}