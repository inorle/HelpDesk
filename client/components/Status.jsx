import React from 'react'

const Status = ({ newStatus, setNewStatus }) => {

    //function to set the new status and hide the dropdown menu when a new status is selected
    const HandleClick = (status) => {
        setNewStatus(status)
        const elem = document.activeElement;
        if(elem){
          elem?.blur();
        }
    }
    //drop down menu for admin to select status - new, in progress and complete 
    //different color based on status
    return (
    <div className='absolute mt-1 top-0 right-0 dropdown dropdown-end '>
            <label tabIndex='0' className={`btn m-1 btn-sm ${newStatus === 'New' ? 'bg-info' : newStatus === 'In Progress'? 'text-secondary' : 'text-success'}`}>{newStatus}</label>
            <ul tabIndex='0' className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
            <li><a onClick={()=> HandleClick('New')}>New</a></li>
            <li><a onClick={() => HandleClick('In Progress')}>In Progress </a></li>
            <li><a onClick={() => HandleClick('Complete')}>Complete</a></li>
            </ul>
    </div>
    )
}

export default Status