import React, { useEffect } from 'react'
import { useState } from 'react'


const Response = ({ response, setSendResponse, email, name }) => {
    const [newResponse, setNewResponse] = useState('')
    
    //if the admin previously messaged someone, show that message, if not just show an empty bod
    useEffect(() => {
        if (response != null) {
            setNewResponse(response)
        }
    }, [])
    //expandable text box for admin's response and button that will send the response when pressed
    return (
    <div>
      <label className='label'>
                    <span className='label-text'> response:
                    </span>
        </label>
            <textarea className='textarea textarea-bordered textarea-md w-full'
            value={newResponse}
            placeholder={`Hi ${name},\nIt looks like you are having an issue with ....`}
                onChange={(e) => setNewResponse(e.target.value)}>
            </textarea>
        <button className='btn btn-sm btn-outline btn-success mt-3' onClick={()=>setSendResponse(newResponse)}> Send Response to {email} </button>
    </div>
)
}

export default Response