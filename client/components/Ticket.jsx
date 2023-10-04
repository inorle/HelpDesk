import React from 'react'
import { useState } from 'react'

const Ticket = ({name, description, status, response, email}) => {
    const [newResponse, setNewResponse] = useState(response)
    const [newStatus, setNewStatus] = useState(status)
    return (
        <div>
            <p>{name}</p> 
            <p>{email}</p>
            <p>{description}</p>
            <p>{newStatus}</p>
            <p> {newResponse}</p>
            <button> Email </button>
        </div>
    )
}

export default Ticket