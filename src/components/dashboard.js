import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import EditFormList from './editTimer/EditFormList'
import OpenCloseForm from './form/OpenCloseForm'
import { newTimer } from '../helpers/helpers'


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timers: [
                // {
                //     title: 'Practice Tennis',
                //     project: 'Gym Chores',
                //     id: 1,
                //     elapsed: 5456099, // milliseconds elapsed
                //     runningSince: Date.now()
                // }
            ] // If we want to make any hardcoded time log we can make it here
        }
    }

    updateTime(attrs) {
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

    createTime(timer) {
        const t = newTimer(timer)
        this.setState({
            timers: this.state.timers.concat(t)
        })
    }

    deleteTime(timerId) {
        console.log(timerId)
        let time = this.state.timers.filter(t => t.id !== timerId)
        this.setState({
            // timers: this.state.timers.filter(t => t.id !== timerId)
            timers: time
            
        })
    }

    startTime(timerId) {
        const time = Date.now() // Number of millisec elapsed

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

    stopTime(timerId) {
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
                    <EditFormList timers={this.state.timers}
                     onFormSubmit={attrs => this.updateTime(attrs)}
                     onTrashClick={timerId => this.deleteTime(timerId)}
                     onStartClick={timerId => this.startTime(timerId)}
                     onStopClick={timerId => this.stopTime(timerId)}
                    />
                    <OpenCloseForm onFormSubmit={timer => this.createTime(timer)} />
                </Grid.Column>
            </Grid>
        )
    }
}

export default Dashboard