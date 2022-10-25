import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    console.log('Constructor')
    super(props)

    this.state = {
      counter: 0,
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {

  }

  decrement() {

  }

  render() {
    return (
      <div>Hi</div>
    )
  }
}

export default Counter