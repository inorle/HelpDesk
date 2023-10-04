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
        <div>
            <form onSubmit={SubmitTicket}>
                <label> Name: </label>
                <input type='text' value={name} placeholder='Name' onChange={e => setName(e.target.value)} /> 
                <label> Email: </label>
                <input type='text' value={email}  placeholder='Email' onChange={e => setEmail(e.target.value)}/> 
                <label> Description</label>
                <input type='text' value={description} placeholder='Description of the Problem' onChange={e => setDescription(e.target.value)} />
                <button type='submit' > Submit </button>   
            </form>
        </div>
    )



}


export default TicketForm