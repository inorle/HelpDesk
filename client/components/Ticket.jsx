import React, { useEffect } from 'react'
import { useState } from 'react'
import Status from './Status.jsx'
import Response from './Response.jsx'


const Ticket = ({name, description, status, response, email, id}) => {
    const [sendResponse, setSendResponse] = useState('')
    const [newStatus, setNewStatus] = useState(status)
    
    useEffect(() => {
        if (status != newStatus) {
            fetch('/api/status', {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus, id }),
            })
                .then(res => res.json())
                .catch(e=> console.log("Error Changing Status"))
        }
    }, [newStatus])

    useEffect(() => {
        if (sendResponse != '') {
            fetch('/api/response', {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ response: sendResponse, id, email })
            })
                .then(res => res.json())
                .then(data => console.log(`to: ${email} body: ${data}`))
                .catch(e => console.log("Error Sending Response"))
        }
    }, [sendResponse])
    

    return (
        <div className="relative card w-96 bg-base-100 shadow-xl">
            <Status newStatus={newStatus} setNewStatus={setNewStatus}/>
            <div className='m-5'>
                <h2 className='font-bold'>{name}</h2>
                <p>{description}</p>
                <Response response={response} email={email} setSendResponse= {setSendResponse} />
            </div>
        </div>
    )
}

export default Ticket