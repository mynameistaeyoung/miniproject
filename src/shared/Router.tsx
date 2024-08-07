import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Pw from '../pages/password/Pw';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                < Route path="/login" element={< Login />} />
                < Route path="/register" element={< Register />} />
                < Route path="/findPassword" element={< Pw/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router