import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react'

import MainForm from './mainForm'

class ToggleTimerForm extends Component {

    constructor() {
        super()

        this.state = {
            isOpen: false
        }
    }

    render() {

        if(this.state.isOpen) {
            return <MainForm
                onFormSubmit={
                    timer => {
                        this.props.onFormSubmit(timer)
                        this.setState({ isOpen: false })
                    }
                }
                onFormClose={() => this.setState({ isOpen: false })}
            />
        } else {
            return (
                <Segment basic textAlign="center">
                    <Button basic icon='plus' onClick={() => this.setState({ isOpen: true })} />
                </Segment>
            )
        }
    }
}

export default ToggleTimerForm