import React from 'react'

import EditForm from './EditForm'

const EditFormList = (props) => (
    <div>
        {
            props.timers.map(timer => (
                <EditForm
                 key={timer.id} 
                 {...timer} 
                 onFormSubmit={props.onFormSubmit}
                 onTrashClick={props.onTrashClick}
                 onStartClick={props.onStartClick}
                 onStopClick={props.onStopClick}
                />
            ))
        }
    </div>
)

export default EditFormList