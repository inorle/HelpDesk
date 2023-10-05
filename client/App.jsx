import React, {useState} from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

const App = () => {

    return(
        <div>
            <Routes>
                <Route exact path='/' element={<HomePage />}> </Route>
                <Route exact path= '/login' element={<LoginPage/>}> </Route>
                <Route exact path='/admin' element={<AdminPage />}> </Route>
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>

        </div>

    )
}
export default App;