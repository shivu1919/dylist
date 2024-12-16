import React, { Component } from 'react'

export class Counter extends Component {

    constructor(){
        super()

        this.state={
            count:0
        }
    }

    Increase(){
        this.setState({
            count:this.state.count+1
        })
    }

  render() {
    return (
      <div>
             <h2> {this.state.count} </h2>
             <button onClick={this.Increase.bind(this)}>Increase</button>
      </div>
    )
  }
}

export default Counter