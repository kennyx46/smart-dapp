import React from 'react'
import { Panel, Well } from 'react-bootstrap'

class AccountInfo extends React.Component {
    render() {
        const { 
            account, balance, weiRaised, cap
        } = this.props

        return (
            <div>
                <Panel bsStyle="primary">
                    <Panel.Heading>Account</Panel.Heading>
                    <Panel.Body>{account}</Panel.Body>
                </Panel>
                <Panel bsStyle="info">
                    <Panel.Heading>Balance</Panel.Heading>
                    <Panel.Body>{balance}</Panel.Body>
                </Panel>

                <Well>Progress: {weiRaised} / {cap} </Well>
                <br/>
            </div>
        )
    }
}

export default AccountInfo