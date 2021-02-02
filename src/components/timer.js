import React, { Component } from 'react'
import { Card, Header } from 'semantic-ui-react'

import FormControlButton from './controls/FormControlButton'
import TimerActionButton from './controls/TimerActionButton'
import { renderElapsedString } from '../helpers/helpers'

// Here how everything will be shown is implemented 
class Timer extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            showButtons: false // ShowButtons means Show Update And Delete Icons
        }
    }

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50) // renders only once 
        console.log(this.forceUpdateInterval)
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval) 
        clearTimeout(this.showButtonsTimeout) // Clears a Timer
    }

    showButtons() {
        this.setState({ showButtons: true })
    }

    hideButtons() {
        this.setState({ showButtons: false })
    }

    render() {

        const elapsedString = renderElapsedString(
            this.props.elapsed,
            this.props.runningSince
        )

        return (
            <Card
             centered 
             onMouseEnter={() => this.showButtonsTimeout = setInterval(() => this.showButtons(), 500)}
             onMouseLeave={() => {
                 clearTimeout(this.showButtonsTimeout)
                 this.hideButtons()
             }}
            >
                <Card.Content>
                    <Card.Header>{this.props.title}</Card.Header>
                    <Card.Meta>{this.props.project}</Card.Meta>
                    <Card.Description>
                        <Header as="h2" textAlign="center">{ elapsedString }</Header>
                    </Card.Description>
                    <FormControlButton
                     id={this.props.id} 
                     showButtons={this.state.showButtons}
                     onTrashClick={this.props.onTrashClick}
                     onEditClick={this.props.onEditClick}    
                    />
                </Card.Content>
                <TimerActionButton
                 timerIsRunning={!!this.props.runningSince}
                 onStartClick={() => this.props.onStartClick(this.props.id)}
                 onStopClick={() => this.props.onStopClick(this.props.id)}
                />
            </Card>
        )
    }
}

export default Timer