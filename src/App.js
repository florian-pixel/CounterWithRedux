import React, { Component } from 'react'
import './App.css';
import {Increment, Decrement} from './action/Action'
import {connect} from 'react-redux'

const mapStateToProps = (props) =>{
  return {
    red: props.reducer
    // inc: props.increment,
    // dec: props.decrement
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    increment: () => dispatch(Increment()),
    decrement: () => dispatch(Decrement())
  }
}
class App extends Component {
  render() {
    return (
      <div className="counter">
        <h1>{this.props.red}</h1>
        <button onClick = {() => this.props.increment()}>+</button>
        <button onClick = {() => this.props.decrement()}>-</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)