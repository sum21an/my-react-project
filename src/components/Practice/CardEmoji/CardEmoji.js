import React, { Component, useState } from 'react';
import './CardEmoji.scss';
import { Collection, Color } from '../../../constants/emoji.js'
import Card from './Card';

function randomColor() {
  const red = Math.floor(Math.random()*255);
  const blue = Math.floor(Math.random()*255);
  const green = Math.floor(Math.random()*255);
  const colorCode = `rgba(${red}, ${green}, ${blue}, 0.75)`;
  return colorCode;
}

const CardEmoji = props => {
  const collections = Object.keys(Collection);
  const [name,setName] = useState(collections[0]);
  const [color,setColor] = useState(randomColor());
  const Style = {
    myCard: {
      background: `linear-gradient(to top, ${color}, #ffffff)`,
      paddingBottom: '2.5rem',
    },
  };
  const collection = Collection[name];
  return(
    <div className="card-emoji-container" style={Style.myCard}>
      <div className="card-emoji-header">
        <h2> Card Emoji : {name} </h2>
      </div>
      <div className="card-emoji-body">
        <div className="mb-3">
          <label className="float-left">Type Of Emoji</label>
          <select className="form-control" value={name} onChange={e=>setName(e.target.value)}>
            {
              collections.map((e,i)=>(
                <option key={i}>{e}</option>
              ))
            }
          </select>
        </div>
        <div className="row no-gutters mt-4">
          {
            Object.keys(collection).map((e,i)=>(
              <div key={i} className="col">
                <Card value={collection[e]} label={e} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CardEmoji;
