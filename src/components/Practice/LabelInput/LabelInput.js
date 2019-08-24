import React, { Component } from "react";
import $ from "jquery";
import "./LabelInput.scss";

class LabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false
    };
  }
  componentDidMount() {
    $(".input-control input")
      .on("focus", function() {
        if (!$(this).hasClass("input--focused")) {
          $(this).addClass("input--focused");
        }
      })
      .on("blur", function() {
        if ($(this).val() === "" && $(this).hasClass("input--focused")) {
          $(this).removeClass("input--focused");
        }
      });
  }

  render() {
    return (
      <div className="label-input-container">
        <h2>Enter Name and Email</h2>
        <div className="form-content">
          <div className="input-control">
            <input
              type="text"
              id="input-name"
              className="input-border"
              placeholder="Enter Your Name"
            />
            <label htmlFor="input-name" className="input-label">
              Your Name
            </label>
          </div>
          <div className="input-control">
            <input
              type="email"
              id="input-email"
              className="input-border"
              placeholder="Enter Email Address"
            />
            <label htmlFor="input-email" className="input-label">
              Your email
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default LabelInput;
