import React from 'react'
import './Die.css'

const Die = (props) => {
  return (
    <div className="Die">
      <i className={`fas fa-dice-${props.value}`}></i>      
    </div>
  );
};

Die.defaultProps = { number: "one" };

export default Die;