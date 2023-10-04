import React, { useEffect } from 'react'
import { useState } from 'react'
import Ticket from './Ticket.jsx'

const TicketList = () => {
    const [tickets, setTickets] = useState([])
    useEffect(() => {
        fetch('/api/alltickets')
            .then(res => res.json())
            .then(data => {
                setTickets(data.map(el => <Ticket key={el.id} name={el.name} description={el.description} email={el.email} status={el.status} response={el.response} />))
        })
    }, [])
    return (
        <div>
            {tickets}
        </div>
    )
}

export default TicketList