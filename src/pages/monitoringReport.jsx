import { Container, Typography } from '@mui/material'
import React from 'react'
import BottomNav from '../components/BottomNav'

export default function monitoringReport() {
        
    return (
        <Container>
            <Typography>Monitoring Reports</Typography>

            <BottomNav page='monitoring_reports' />
        </Container>
    )
}
