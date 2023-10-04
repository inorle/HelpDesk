import React from 'react'
import TicketForm from '../components/TicketForm.jsx'

const HomePage = () => {

   
    return (
        <div className='flex flex-col items-center'>
            <h2 className="mt-20 text-3xl font-bold underline">Submit Help Desk Ticket</h2>
            <TicketForm />
            <a href='/admin' className='mt-3 link link-hover text-sm'> I'm an Admin </a>
        </div>
    )
}
export default HomePage
