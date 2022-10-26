import React, { Component } from 'react'

const ErrorComponent = () => <div>{props.nonExisstantProps}</div>   // Custom fake empty variable, to trigger error

class Counter extends Component {
  constructor(props) {
    console.log('Constructor')
    super(props)

    this.state = {
      counter: 0,
      seed: 0,
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

  static getDerivedStateFromProps(props, state) {
    if(props.seed && state.seed !==props.seed) {
        return {
            seed: props.seed,
            counter: props.seed,
        }
    }

    return null
  }

  componentDidMount() {
    console.log('componentDidMount')
    console.log('-----')
  }

  shouldComponentUpdate(nextProps, nextState) { // Lets React know whether to trigger render or not
    // Only useful for fine optimisation. You can LOSE performance if you use this method incorrectly.
    if (nextProps.ignoreProp && this.state.ignoreProp !== nextProps.ignoreProp) {
        console.log('shouldComponentUpdate - DO NOT RENDER')
        return false
    }
    return true // True will trigger render, and vice versa
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get Snapshot before update')
    return null
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
        <ErrorComponent />
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
  componentDidCatch(error, info) {  // Handles any errors we run into
    console.log('component caught error')
  }
}

export default Counter