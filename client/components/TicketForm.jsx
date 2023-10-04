import React from 'react'
import { useState } from 'react'

const TicketForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

    const SubmitTicket = (e) => {
        //could put a check to see if all the fields have a valid entry
        //could put a check to see if email field is correct
        e.preventDefault();

        const res =  fetch('/api/newticket', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, description }),
        })
            .then(res => res.json)
            .then(() => {
                setName('')
                setEmail('')
                setDescription('')
            })
            .catch(e=> console.log("Error Sending Ticket"))
    
        return
    }
    return (
        <div >
            <form onSubmit={SubmitTicket} className= 'mt-20 flex flex-col form-control max-w-lg p-4 bg-white rounded shadow-lg'>
                <label className="label">
                    <span className="label-text">Name:</span>
                </label>
                <input type='text'
                    className='input input-bordered'
                    value={name}
                    placeholder='Name'
                    onChange={e => setName(e.target.value)} /> 
                <label className='label'>
                    <span className="label-text">Email:</span>
                </label>
                <input type='email'
                    className='input input-bordered w-full max-w-xs'
                    value={email} placeholder='Name@email.com'
                    onChange={e => setEmail(e.target.value)} /> 
                <label className='label'>
                    <span className="label-text"> Description:
                    </span>
                </label>
                <textarea className="textarea textarea-bordered textarea-md w-full"
                    value={description}
                    placeholder="Description of the Problem"
                    onChange={e => setDescription(e.target.value)}>
                </textarea>
                <button className= 'btn btn-sm btn-outline btn-success mt-3' type='submit' > Submit </button>   
            </form>
        </div>
    )



}


export default TicketForm