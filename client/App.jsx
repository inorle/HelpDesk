import React from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import AdminLoginPage from './pages/AdminLoginPage.jsx';
import AdminPage from './pages/AdminPage.jsx';


const App = () => {
     
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<HomePage />}> </Route>
                <Route exact path="/login" element={<AdminLoginPage />}> </Route>
                <Route exact path="/admin" element={<AdminPage />}> </Route>
            </Routes>

        </div>

    )
}
export default App;