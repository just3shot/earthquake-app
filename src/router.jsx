import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import App from './App';
import Dashboard from './pages/dashboard';
import CrisisReport from './pages/crisisReport';
import LarissaPage from './larissa_page'
import PredictionReport from './pages/predictionReport';
import SurvivalTips from './pages/survivalTips';
import SurvivalTools from './pages/survivalTools';


export default function Router() {
    return (
        <Routes>
            <Route index element={<Navigate to='/dashboard'/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/prediction_reports" element={<PredictionReport />} />
            <Route path="/crisis_reports" element={<CrisisReport />} />
            <Route path="/larissa_page" element={<LarissaPage />} />
            <Route path="/survivaltips" element={<SurvivalTips />} />
            <Route path="/survivaltools" element={<SurvivalTools />} />
        </Routes>
    )
}


