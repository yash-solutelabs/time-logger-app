import React, { Component } from 'react'

import MainForm from '../form/MainForm'
import Timer from '../Timer'

class EditForm extends Component {

    constructor() {
        super()
        
        this.state = {
            editFormOpen: false
        }
    }

    closeForm() {
        this.setState({ editFormOpen: false })
    } 

    openForm() {
        this.setState({ editFormOpen: true })
    }

    render() {
        if(this.state.editFormOpen) {
            return (
                <MainForm
                 id={this.props.id} 
                 title={this.props.title} 
                 project={this.props.project} 
                 onFormSubmit={timer => {
                     this.props.onFormSubmit(timer)
                     this.closeForm()
                 }}
                 onFormClose={() => this.closeForm()}
                />
            )
        } else {
            return (
                <Timer
                 id={this.props.id} 
                 title={this.props.title} 
                 project={this.props.project}
                 elapsed={this.props.elapsed}
                 runningSince={this.props.runningSince}
                 onEditClick={() => this.openForm()}
                 onTrashClick={this.props.onTrashClick}
                 onStartClick={this.props.onStartClick}
                 onStopClick={this.props.onStopClick}
                />     
            )
        }
    }
}

export default EditForm