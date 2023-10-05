import React, { useState } from "react";
import Login from '../components/Login.jsx'

const LoginPage = () => {

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='mt-20 text-3xl font-bold'> Admin Login</h1>
            <h2> (username is admin, password is admin)</h2>
            <Login/>
        </div>
    )
}

export default LoginPage