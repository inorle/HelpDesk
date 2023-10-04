import React from 'react'
import TicketList from '../components/TicketList.jsx'
const AdminPage = () => {
    
    return (
        <div className= 'mt-5 flex flex-col items-center'>
            <h2>Welcome Admin!</h2>
            <TicketList/>
        </div>
    )
}

export default AdminPage
