import './App.css';
import logo from './imgLogo.jpg'
import Input from './Components/Input.jsx'
import Select from './Components/Select.jsx'
import Button from './Components/Button.jsx'

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rates: {
        EUR: 0,
        USD: 0,
        CHF: 0,
      },
      amount: 0,
      currency: "EUR",
      exchangeAmount: 0,
    }
  
  }

  componentDidMount() {
    fetch("http://api.nbp.pl/api/exchangerates/tables/c/")
    .then((d) => d.json())
    .then((d) => {
      this.setState((state) => ({ rates: {
      EUR: d[0].rates[3].ask,
      USD: d[0].rates[0].ask,
      CHF: d[0].rates[5].ask,
      } }))
    })
    .catch((err) => console.log(err));
  
  }

  getAmount = (amount) => {
    console.log(amount)
    this.setState({amount})
  }
  
  getCurrency = (currency) => {
    console.log(currency)
    this.setState({currency})
  }

  exchangeAmountFn = () => {
    this.setState({ exchangeAmount: this.state.rates[this.state.currency] * this.state.amount })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} style={{width: '125px'}} alt="" />
          <div className="titleDiv">
            <p className="title">Currency converter</p>
          </div>
        </header>
          <div className="content">
            <Input getAmount={this.getAmount}/>
            <Select getCurrency={this.getCurrency}/>
            <Button onBtnClick={this.exchangeAmountFn}/>
            <p>Currency</p>
            <span>&nbsp;{this.state.exchangeAmount.toFixed(2)} PLN</span>
          </div>
      </div>
    );
  }
}

export default App;
