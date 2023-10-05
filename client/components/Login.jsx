import React, { useState } from "react";
import {useNavigate } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const LoginFunction = (e) => {
        e.preventDefault();
        console.log('SUCESS')
        //check if username field and password field have been filled out
        if (username.length > 0 && password.length > 0) {
            fetch(`https://helpdesk11-8eb3cc5ba962.herokuapp.com/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password}),
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.id) {
                        navigate('/admin');
                    }
                    else {
                        alert('Wrong Credentials');
                    }
                })
                .catch(e => console.log('Error Logging In'))
            }
        return
    }
    return (
        <div>
            <form onSubmit={(e)=>LoginFunction(e)} className= 'mt-20 flex flex-col form-control max-w-xl p-4 bg-white rounded shadow-lg'>
            <label className='label'>
                <span className='label-text'>Username:</span>
            </label>
            <input type='text'
                className='input input-bordered'
                value={username}
                placeholder='username'
                onChange={e => setUsername(e.target.value)} /> 
            <label className='label'>
                <span className='label-text'>Password:</span>
            </label>
            <input type='password'
                className='input input-bordered '
                value={password} placeholder='password'
                onChange={e => setPassword(e.target.value)} /> 
            <button className= 'btn btn-sm btn-outline btn-success mt-3' type='submit' > Submit </button>   
                </form>
        </div>
    )
}

export default Login;