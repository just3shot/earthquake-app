import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './home';
import App from './App';
import LarissaPage from './larissa_page'
export default function Router() {
    return (
        <Routes>
            <Route index element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/larissa_page" element={<LarissaPage />} />
        </Routes>
    )
}


