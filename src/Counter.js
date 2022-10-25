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
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    })
  }

  componentDidMount() {
    console.log('componentDidMount')
    console.log('-----')
  }

  shouldComponentUpdate(nextProps, nextState) { // Lets React know whether to trigger render or not
    // Only useful for fine optimisation
    return true // True will trigger render, and vice versa
  }

  render() {
    console.log('render')
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>
          Counter: {this.state.counter}
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
    console.log('-----')
  }
  componentWillUnmount() { // Called when a component is taken out of DOM
    console.log('componentWillUnmount');
    console.log('-------------')
  }
}

export default Counter