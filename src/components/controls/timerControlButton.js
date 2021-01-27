import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const visibleButtonStyle = {
    visibility: 'visible',
    opacity: 1,
    transition: 'opacity 0.25s ease-in'
}

const hiddenButtonStyle = {
    visibility: 'hidden',
    opacity: 0,
    transition: 'opacity 0.25s ease-in'
}

const TimerControlButton = (props) => {
    return (
        <Card.Content style={
            props.showButtons ? visibleButtonStyle : hiddenButtonStyle
        } extra>
            <span className="right floated">
                <Icon name="edit" onClick={props.onEditClick} style={{ cursor: 'pointer' }} />
            </span>
            <span className="right floated">
                <Icon name="trash" onClick={() => props.onTrashClick(props.id)} style={{ cursor: 'pointer' }} />
            </span>
        </Card.Content>
    )
}

export default TimerControlButton