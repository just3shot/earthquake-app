import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import App from './App';
import Dashboard from './pages/dashboard';
import CrisisReport from './pages/crisisReport';
import MonitoringReport from './pages/monitoringReport';
import SurvivalTips from './pages/survivalTips';
import SurvivalTools from './pages/survivalTools';


export default function Router() {
    return (
        <Routes>
            <Route index element={<Navigate to='/dashboard'/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/monitoring_reports" element={<MonitoringReport />} />
            <Route path="/crisis_reports" element={<CrisisReport />} />
            <Route path="/survivaltips" element={<SurvivalTips />} />
            <Route path="/survivaltools" element={<SurvivalTools />} />
        </Routes>
    )
}


