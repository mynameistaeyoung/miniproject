import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home';
import Login from '../pages/accountmanagement/login/Login';
import Register from '../pages/accountmanagement/register/Register';
import FindPassword from '../pages/accountmanagement/findpassword/FindPassword';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                < Route path="/" element={< Home />} />
                < Route path="/login" element={< Login />} />
                < Route path="/register" element={< Register />} />
                < Route path="/findPassword" element={< FindPassword />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router