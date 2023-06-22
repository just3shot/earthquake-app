import React from 'react'
import { Container, Typography, AppBar } from '@mui/material'
import BottomNav from '../components/BottomNav'
import CustomAppBar from '../components/CustomAppBar'

export default function crisisReport() {

    return (
        <Container sx={{ backgroundColor: '#F2F3F5' }}>
            <CustomAppBar headerName={"Crisis Alert"} />
            
            <BottomNav page='crisis_reports' />
        </Container>
    )
}
