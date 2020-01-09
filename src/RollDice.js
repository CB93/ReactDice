import React, { Component } from "react";
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
  static defaultProps = {
    sides : [`one`,`two`,`three`,`four`,`five`,`six`]
  }
  constructor() {
    super()
    this.state = {
      diceOne: "one",
      diceTwo: "one"
    }
    this.roll = this.roll.bind(this)
  }

  // Rolls a value between 1 and 6 for both die and converts value into a word.
  roll() {
    const side1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ]
    const side2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ]

    this.setState({
      diceOne: side1,
      diceTwo: side2,
    })
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
        <Die value={this.state.diceOne} />
        <Die value={this.state.diceTwo} />
        </div>
        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    )
  }
}

export default RollDice