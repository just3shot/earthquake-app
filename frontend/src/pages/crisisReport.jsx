import React from 'react'
import { Container, Typography, AppBar } from '@mui/material'
import BottomNav from '../components/BottomNav'

export default function crisisReport() {

    return (
        <Container sx={{ backgroundColor: '#F2F3F5' }}>
            <AppBar>
                <Typography variant="h5" sx={{ flexGrow: 1, padding: 1, backgroundColor: 'white', color: 'black' }}>
                    Crisis Alert
                </Typography>
            </AppBar>
            
            <BottomNav page='crisis_reports' />
        </Container>
    )
}
