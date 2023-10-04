import React from 'react'
import { useState } from 'react'

const Ticket = ({name, description, status, response, email}) => {
    const [newResponse, setNewResponse] = useState('')
    const [newStatus, setNewStatus] = useState(status)
    return (
        <div className="relative card w-96 bg-base-100 shadow-xl">
            <div class="absolute top-0 right-0 dropdown">
                <label tabindex="0" class="btn m-1 btn-sm">{newStatus}</label>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>New</a></li>
                        <li><a>In Progress 2</a></li>
                        <li><a>Complete</a></li>
                    </ul>
            </div>
            <div className='mt-5 ml-5 mr-5 mb-5'>
                <h2 className='font-bold'>{name}</h2>
                <p>{description}</p>
                <div className='grid grid-col-2'>

                    <input value={newResponse}></input>
                    <button className="btn btn-xs" > Send Response to {email} </button>
                </div>
             </div>
        </div>
    )
}

export default Ticket