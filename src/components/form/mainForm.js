import React, { Component } from 'react'
import { Button, Card, Form, Message } from 'semantic-ui-react'


class MainForm extends Component {
    
    constructor() {
        super()

        this.state = {
            errorList: []
        }
        
        this.setTitle = React.createRef()
        this.setProject = React.createRef()
    }
    
    handleSubmit() {
        if(this.setTitle.current.value && this.setProject.current.value) {
            this.props.onFormSubmit({
                id: this.props.id,
                title: this.setTitle.current.value,
                project: this.setProject.current.value
            }) 
        } else {
            let errorList = []
            if(!this.setTitle.current.value) {
                errorList.push('Title should not be empty.')
            }
            if(!this.setProject.current.value) {
                errorList.push('Project should not be empty.')
            }
            this.setState({ errorList })
        }
    }

    render() {
        const submitText = this.props.id ? 'Update' : 'Create'
        return (
            <Card centered>
                <Card.Content>
                    <Form error={this.state.errorList.length > 0}>
                        <Form.Field>
                            <label>Title</label>
                            <input type="text"
                             ref={this.setTitle} 
                             defaultValue={this.props.title} 
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Project</label>
                            <input
                             type="text" 
                             ref={this.setProject} 
                             defaultValue={this.props.project} 
                            />
                        </Form.Field>
                        <Message error list={this.state.errorList} />
                        <Button.Group attached='bottom'>
                            <Button
                             as="div" 
                             basic 
                             color="blue" 
                             onClick={this.handleSubmit.bind(this)}
                            >
                                { submitText }
                            </Button>
                            <Button
                             as="div" 
                             basic 
                             color="red" 
                             onClick={this.props.onFormClose}
                            >
                                Cancel
                            </Button>
                        </Button.Group>
                    </Form>
                </Card.Content>
            </Card>
        )
    }
}

export default MainForm