import React, { Component } from "react";
import Dice from './Dice'

class RollDice extends Component {
  constructor() {
    super()
    this.state = {
      diceOne : "one",
      diceTwo : "one"
    }
  }
  
  render() {
    return (
      <div>
        <Dice value={this.state.diceOne} />
        <Dice value={this.state.diceTwo}/>
      </div>
    )
  }
}

export default RollDice