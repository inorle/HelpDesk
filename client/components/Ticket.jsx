import React from 'react'
import { useState } from 'react'

const Ticket = ({name, description, status, response, email}) => {
    const [newResponse, setNewResponse] = useState('')
    const [newStatus, setNewStatus] = useState(status)
    return (
        <div>
            <p>{name}</p> 
            <p>{description}</p>
            <form>
                <input value={newStatus}></input>
                <label> send {email}: </label>
                <input value ={newResponse}></input>
                <button className="btn btn-primary" > Update </button>
            </form>
        </div>
    )
}

export default Ticket