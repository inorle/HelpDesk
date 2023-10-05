import React from 'react'
import { useState } from 'react'

const TicketForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

    //function to submit ticket to the backend
    const SubmitTicket = (e) => {
        e.preventDefault();
        //check if name field and description field have been filled out
        if (name.length > 0 && description.length > 0) {
            const res = fetch(`${process.env.ROOT_URI}/api/newticket`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, description }),
            })
                .then(res => res.json())
                .then(() => {
                    setName('')
                    setEmail('')
                    setDescription('')
                })
                .catch(e => console.log('Error Sending Ticket'))
            }
        return
    }
    return (
        <div className='w-5/12 h-9/12'>
            <form onSubmit={SubmitTicket} className= 'mt-20 flex flex-col form-control max-w-xl p-4 bg-white rounded shadow-lg'>
                <label className='label'>
                    <span className='label-text'>Name:</span>
                </label>
                <input type='text'
                    className='input input-bordered'
                    value={name}
                    placeholder='Name'
                    onChange={e => setName(e.target.value)} /> 
                <label className='label'>
                    <span className='label-text'>Email:</span>
                </label>
                <input type='email'
                    className='input input-bordered '
                    value={email} placeholder='Name@email.com'
                    onChange={e => setEmail(e.target.value)} /> 
                <label className='label'>
                    <span className='label-text'> Description:
                    </span>
                </label>
                <textarea className='textarea textarea-bordered textarea-md w-full'
                    value={description}
                    placeholder='Description of the Problem'
                    onChange={e => setDescription(e.target.value)}>
                </textarea>
                <button className= 'btn btn-sm btn-outline btn-success mt-3' type='submit' > Submit </button>   
            </form>
        </div>
    )
}


export default TicketForm