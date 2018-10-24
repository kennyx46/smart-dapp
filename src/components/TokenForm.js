import React from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

import web3 from '../services/web3'

class TokenForm extends React.Component {

    state = {
        value: '',
        account: ''
    }

    async componentDidMount() {
        console.log("before");
        const accounts = await web3.eth.getAccounts()
        console.log("after");
        console.log(accounts);
        
        this.setState({ account: accounts[0] })
    }

    handleChange = (e) => {
        const { value } = e.target 
        this.setState({ value })
    }

    render() {

        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                    validationState={"success"}
                >
                    <ControlLabel>Please enter your account</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    <p>{this.state.account}</p>
                    <FormControl.Feedback />
                </FormGroup>
            </form>
        )
    }
}

export default TokenForm