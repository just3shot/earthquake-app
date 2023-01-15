import { Container, Typography } from '@mui/material'
import React from 'react'
import BottomNav from '../components/BottomNav'

export default function predictionReport() {
        
    return (
        <Container>
            <Typography>Prediction Report</Typography>

            <BottomNav page='prediction_reports' />
        </Container>
    )
}
