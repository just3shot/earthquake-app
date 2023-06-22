import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import App from './App';
import Dashboard from './pages/dashboard';
import CrisisReport from './pages/crisisReport';
import MonitoringReport from './pages/monitoringReport';
import SurvivalTips from './pages/survivalTips';
import SurvivalTools from './pages/survivalTools';
import MalaysiaReport from './pages/malaysiaReport';
import Whistle from './pages/survival_tools/whistle';
import VisualSOS from './pages/survival_tools/visualSOS';
import Flashlight from './pages/survival_tools/flashlight';
import FirstAid from './pages/survival_tools/firstAid';

export default function Router() {
    return (
        <Routes>
            <Route index element={<Navigate to='/dashboard'/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/monitoring_reports" element={<MonitoringReport />} />
            <Route path="/monitoring_reports/malaysia" element={<MalaysiaReport />} />
            <Route path="/crisis_reports" element={<CrisisReport />} />
            <Route path="/survivaltips" element={<SurvivalTips />} />
            <Route path="/survivaltools" element={<SurvivalTools />} />
            <Route path="/survivaltools/whistle" element={<Whistle />} />
            <Route path="/survivaltools/visual_SOS" element={<VisualSOS />} />
            <Route path="/survivaltools/flashlight" element={<Flashlight />} />
            <Route path="/survivaltools/first_aid" element={<FirstAid />} />
        </Routes>
    )
}


