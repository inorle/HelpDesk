import React, { useEffect } from 'react'
import { useState } from 'react'
import Ticket from './Ticket.jsx'

const TicketList = () => {
    const [newTickets, setNewTickets] = useState([])
    const [inProgressTickets, setInProgressTickets] = useState([])
    const [completedTickets, setCompletedTickets] = useState([])

    const addToArray = (ticketType, updateType, data) => {
        updateType(data.reduce((acc, el) => {
            if (el.status === ticketType) {
                acc.push(<Ticket key={el.id} id={el.id} name={el.name} description={el.description} email={el.email} status={el.status} response={el.response} />)
            }
            return acc
        }, []))
    }
    useEffect(() => {
        fetch('/api/alltickets')
            .then(res => res.json())
            .then(data => {
                addToArray('New', setNewTickets, data)
                addToArray('In Progress', setInProgressTickets, data)
                addToArray('Complete', setCompletedTickets, data)
            })
    }, [])
    return (
        <div className='flex flex-wrap gap-2 justify-center'>
            {newTickets}
            {inProgressTickets}
            {completedTickets}
        </div>
    )
}

export default TicketList