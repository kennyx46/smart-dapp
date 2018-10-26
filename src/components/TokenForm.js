import React from 'react'
import { FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap'

class TokenForm extends React.Component {

    state = {
        value: '',
    }

    handleChange = (e) => {
        const { value } = e.target 
        this.setState({ value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { value } = this.state
        this.props.onSubmit(value)
    }

    render() {
        const { isLoading } = this.props

        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="formBasicText">
                    <FormGroup>
                        <ControlLabel>Want to invest more?</ControlLabel>
                        <InputGroup>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="enter amount"
                                onChange={this.handleChange}
                            />
                            <InputGroup.Button disabled>
                                <Button>wei</Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                    <Button bsStyle="primary" block type="submit" disabled={isLoading}>
                        Invest!
                    </Button>
                </FormGroup>
            </form>
        )
    }
}

export default TokenForm