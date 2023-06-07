import React from 'react'
import { Container, Typography } from '@mui/material'
import BottomNav from '../components/BottomNav'

export default function crisisReport() {
    return (
        <Container>
            <Typography>Crisis Alert</Typography>

            <BottomNav page='crisis_reports' />
        </Container>
    )
}
