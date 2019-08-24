import React from 'react';
import './Card.scss';

const Card = props => {
  const { value, label } = props;
  return(
    <div className="my-card text-center custom-card">
      <div className="symbol">{value}</div>
      <div>{label}</div>
    </div>
  )
}

export default Card;
