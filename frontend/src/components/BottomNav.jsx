import React from 'react'
import { BottomNavigation, BottomNavigationAction, Icon, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import FindInPageIcon from '@mui/icons-material/FindInPage';

import HeartRed from '../assets/heart_red.png';
import HeartRedSvg from '../assets/heart_red.svg';
import FirstAidKit from '../assets/firstaidkit2.png';
import FirstAidKitSvg from '../assets/firstaidkit2.svg';


export default function BottomNav({ page }) {

    const navigate = useNavigate();

    const HeartRedIcon = () => (
        <Icon>
            <img alt="heartred" src={HeartRedSvg} height={24} width={24} />
        </Icon>
    );

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation value={page} showLabels>
                <BottomNavigationAction value="dashboard" onClick={() => navigate('/dashboard')} label="Dashboard" icon={<DashboardIcon />} />
                <BottomNavigationAction value="monitoring_reports" onClick={() => navigate('/monitoring_reports')} label="Monitoring Reports" icon={<FindInPageIcon />} />
                <BottomNavigationAction value="crisis_reports" onClick={() => navigate('/crisis_reports')} label="Crisis Alert" icon={<CrisisAlertIcon />} />
            </BottomNavigation>
        </Paper>
    )
}
