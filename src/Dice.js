import React from 'react'

const Dice = (props) => {
  return (
    <div>
      <i className={`fas fa-dice-${props.value}`}></i>      
    </div>
  );
};

Dice.defaultProps = { number: "one" };

export default Dice;