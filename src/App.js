import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mount: 0,
    }

    this.mountCounter = this.mountCounter.bind(this);
    this.unmountCounter = this.unmountCounter.bind(this);
  }

  mountCounter() {
    this.setState({
      mount: true,
    })
  }

  unmountCounter() {
    this.setState({
      mount: false,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.mountCounter}>Mount</button>
        <button onClick={this.unmountCounter}>Unmount</button>
        <div>
          {this.state.mount ? < Counter />: null}
        </div>
      </div>
    )
  }
}

export default App