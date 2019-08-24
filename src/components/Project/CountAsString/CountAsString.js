import React, { Component } from 'react'
import './CountAsString.scss'

class CountAsString extends Component {
  state = {
    counter: 0,
    btnDisable: false,
  }

  increaseCounter = () => {
    const { counter } = this.state;
    this.setState({
      counter: this.state.counter + 1,
      btnDisable: false,
    })
  }

  decreaseCounter = () => {
    const { counter } = this.state;
    if (counter < 1) {
      this.setState({
        btnDisable: true,
      })
    } else {
      this.setState({
        counter: this.state.counter - 1,
      })
    }
  }

  convertToRoman = (counter) => {
    const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let romanized = '';

    for (var index = 0; index < decimalValue.length; index++) {
      while (decimalValue[index] <= counter) {
        romanized += romanNumeral[index];
        counter -= decimalValue[index];
      }
    }
    return romanized;
  }

  changeNumberInToString = (counter) => {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const bigNumber = ['', ' thousand ', ' million ', ' billion ', ' trillion ', ' quadrillion ', ' quintillion ', ' sextillion '];
    const arr = [];
    var stringValue = '';
    var i = 0;
    while (counter) {
      arr.push(counter % 1000);
      counter = parseInt(counter / 1000, 10);
    }
    while (arr.length) {
      stringValue = (function (a) {
        const x = Math.floor(a / 100);
        const y = Math.floor(a / 10) % 10;
        const z = a % 10;
        console.log(a, x, y, z);
        return (x > 0 ? ones[x] + ' hundred ' : '') +
          (y >= 2 ? tens[y] + ' ' + ones[z] : ones[10 * y + z]);
      })(arr.shift()) + bigNumber[i++] + stringValue;
    }
    return stringValue;
  }
  render() {
    const { counter, btnDisable } = this.state;
    return (
      <div className="counter-container">
        <div className="count-wrapper">
          <h1>{counter}</h1>
          <h1>{this.convertToRoman(counter) === "" ? "Not Defined" : this.convertToRoman(counter)}</h1>
          <h1>{this.changeNumberInToString(counter) === "" ? "Zero" : this.changeNumberInToString(counter)}</h1>
          <div className="button-wrappper">
            <button onClick={this.decreaseCounter} disabled={btnDisable}>
              -
            </button>
            <button onClick={this.increaseCounter}>
              +
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CountAsString;
