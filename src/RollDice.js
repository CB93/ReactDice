import React, { Component } from "react";
import Dice from './Dice'
import CONSTANTS from './Constants'
class RollDice extends Component {


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
    const value1 = CONSTANTS.ROLLNUMS[Math.floor(Math.random() * 6)]
    const value2 = CONSTANTS.ROLLNUMS[Math.floor(Math.random() * 6)]

    this.setState({
      diceOne: value1,
      diceTwo: value2,
    })
  }

  render() {
    return (
      <div>
        <Dice value={this.state.diceOne} />
        <Dice value={this.state.diceTwo} />
        <button onClick={this.roll}>Click to roll</button>
      </div>
    )
  }
}

export default RollDice