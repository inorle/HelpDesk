import React, { useEffect } from 'react'
import { useState } from 'react'
import Status from './Status.jsx'
import Response from './Response.jsx'


const Ticket = ({name, description, status, response, email, id}) => {
    const [sendResponse, setSendResponse] = useState('')
    const [newStatus, setNewStatus] = useState(status)
    //change the status in the db based on the user changing the status- one check to ignore the change based on initial mount
    useEffect(() => {
        if (status != newStatus) {
            fetch(`https://helpdesk11-8eb3cc5ba962.herokuapp.com/api/status`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus, id }),
            })
                .then(res => res.json())
                .catch(e=> console.log('Error Changing Status'))
        }
    }, [newStatus])
    //update the response when the admin adds one 
    useEffect(() => {
        if (sendResponse != '') {
            fetch(`https://helpdesk11-8eb3cc5ba962.herokuapp.com/api/response`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ response: sendResponse, id, email })
            })
                .then(res => res.json())
                .then(data => console.log(`to: ${email} body: ${data}`))
                .catch(e => console.log('Error Sending Response'))
        }
    }, [sendResponse])
    

    return (
        //ticket card showing the status in left, then name, description and field for response
        <div className={`relative card w-96 bg-base-100 shadow-xl'}`}>
            <Status newStatus={newStatus} setNewStatus={setNewStatus}/>
            <div className='m-5'>
                <h2 className='font-bold text-xl'>{name}</h2>
                <p>{description}</p>
                <Response response={response} name={name}  email={email} setSendResponse= {setSendResponse} />
            </div>
        </div>
    )
}

export default Ticket