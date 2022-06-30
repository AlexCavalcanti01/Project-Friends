import React from "react";

import { Register } from "./components/Register";
import { Login } from "./components/Login"

import { Route, Routes } from 'react-router-dom'

const Router = () => (    
        <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route path="/" element={<Login />}/>
        </Routes>
    
);

export default Router