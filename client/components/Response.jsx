import React, { useEffect } from 'react'
import { useState } from 'react'


const Response = ({ response, setSendResponse, email, name }) => {
    const [newResponse, setNewResponse] = useState('')
    useEffect(() => {
        if (response != null) {
            setNewResponse(response)
        }
    }, [])
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