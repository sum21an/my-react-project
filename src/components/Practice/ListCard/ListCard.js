import React, { Component } from "react";
import "./ListCard.scss";

class ListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="label-input-container">
        <h2>Enter Name and Email</h2>
        <div className="form-content">
          <div className="input-control">
            <input type="text" id="input-name" className="input-border" />
            <label htmlFor="input-name"></label>
          </div>
          <div className="input-control">
            <input type="email" id="input-email" className="input-border" />
            <label htmlFor="input-email"></label>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCard;
