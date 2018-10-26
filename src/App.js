import React, { Component } from 'react';
// import logo from './logo.svg';
import { PageHeader, Jumbotron, Alert } from "react-bootstrap"
import './App.css';
import TokenForm from './components/TokenForm'
import AccountInfo from './components/AccountInfo'

import web3 from './services/web3'
import token from "./services/token"
import crowdsale from './services/crowdsale'

class App extends Component {

  state = {
    account: '',
    weiRaised: '',
    cap: '',
    balance: '',
    currentAccountBalance: '',
    isLoading: false,
    status: ''
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const [weiRaised, cap] = await Promise.all([
      crowdsale.methods.weiRaised().call(),
      crowdsale.methods.cap().call()
    ])
    this.setState({ weiRaised, cap })

    const balance = await token.methods.balanceOf(accounts[0]).call()
    this.setState({ balance })

    const currentAccountBalance = await web3.eth.getBalance(accounts[0])
    this.setState({currentAccountBalance})

  }

  handleTokenBuy = async (value) => {
    this.setState({ isLoading: true, status: '' })
    try {
      await crowdsale.methods.buyTokens(this.state.account)
        .send({ from: this.state.account, value: web3.utils.toWei(value, 'wei') })
      this.setState({ status: 'success' })
    } catch(e) {
      this.setState({ status: 'error' })
    }
    this.setState({ isLoading: false })
  }

  render() {
    const { account, balance, isLoading, status, weiRaised, cap } = this.state
    return (
      <div className="App container">
        <Jumbotron>
            {status === "error" && <Alert bsStyle="danger">
              Error during transaction. Please try again later.
            </Alert>}
            {status === "success" && <Alert bsStyle="success">
              Congratulations! Please check your tokens later.
            </Alert>}
            <PageHeader>
              Dapp
            </PageHeader>
            <AccountInfo account={account} balance={balance} weiRaised={weiRaised} cap={cap}/>
            <TokenForm onSubmit={this.handleTokenBuy} isLoading={isLoading}/>
          </Jumbotron>
      </div>
    );
  }
}

export default App;
