import React from 'react'
import { Card, Container, Divider, Typography } from '@mui/material'



import BottomNav from '../components/BottomNav'

export default function survivalTools() {
    return (
        <Container>
        
            <Typography>Survival Tools</Typography>

            
            <BottomNav page='dashboard' />
        </Container>
    )
}