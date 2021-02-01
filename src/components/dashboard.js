import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'


import EditableTimerList from './editTimer/EditableTimerList'
import ToggleTimerForm from './form/ToggleTimerForm'
import { newTimer } from '../helpers/helpers'


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timers: []
        }
    }

    updateTimer(attrs) {
        this.setState({
            timers: this.state.timers.map(timer => {
                if(timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project
                    })
                } else {
                    return timer
                }
            })
        })
    }

    createTimer(timer) {
        const t = newTimer(timer)
        this.setState({
            timers: this.state.timers.concat(t)
        })
    }

    deleteTimer(timerId) {
        console.log(timerId)
        let time = this.state.timers.filter(t => t.id !== timerId)
        this.setState({
            // timers: this.state.timers.filter(t => t.id !== timerId)
            timers: time
            
        })
    }

    startTimer(timerId) {
        const time = Date.now()

        this.setState({
            timers: this.state.timers.map(timer => {
                if(timer.id === timerId) {
                    return Object.assign({}, timer, {
                        runningSince: time
                    })
                } else {
                    return timer
                }
            })
        })
    }

    stopTimer(timerId) {
        const time = Date.now()

        this.setState({
            timers: this.state.timers.map(timer => {
                if(timer.id === timerId) {
                    const lastTimeElapsed = time-timer.runningSince
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastTimeElapsed,
                        runningSince: null
                    })
                } else {
                    return timer
                }
            })
        })
    }

    render() {
        return (
            <Grid centered>
                <Grid.Column mobile={16} computer={4} tablet={8}>
                    <EditableTimerList timers={this.state.timers}
                     onFormSubmit={attrs => this.updateTimer(attrs)}
                     onTrashClick={timerId => this.deleteTimer(timerId)}
                     onStartClick={timerId => this.startTimer(timerId)}
                     onStopClick={timerId => this.stopTimer(timerId)}
                    />
                    <ToggleTimerForm onFormSubmit={timer => this.createTimer(timer)} />
                </Grid.Column>
            </Grid>
        )
    }
}

export default Dashboard