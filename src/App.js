import React, { Component } from 'react';
// import logo from './logo.svg';
import { PageHeader } from "react-bootstrap"
import './App.css';
import TokenForm from './components/TokenForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader>
          Dapp
        </PageHeader>
        <TokenForm/>
      </div>
    );
  }
}

export default App;
