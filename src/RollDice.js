import React, { Component } from "react";
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
  static defaultProps = {
    sides: [`one`, `two`, `three`, `four`, `five`, `six`]
  }
  constructor() {
    super()
    this.state = { diceOne: "one", diceTwo: "one", rolling: false }
    this.roll = this.roll.bind(this)
  }

  roll() {
    //rolls a value between 1 and 6
    const side1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ]
    const side2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ]

    this.setState({ diceOne: side1, diceTwo: side2, rolling: true })

    //wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false })
    }, 1000)
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die value={this.state.diceOne} rolling={this.state.rolling} />
          <Die value={this.state.diceTwo} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? `Rolling..` : `Roll Dice!`}
        </button>
      </div>
    )
  }
}

export default RollDice