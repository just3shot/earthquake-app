import { Container, Typography } from '@mui/material'
import React from 'react'
import BottomNav from '../components/BottomNav'

export default function survivalTips() {
  return (
    <Container>
        <Typography>Survival Tips</Typography>

        <BottomNav page='survival tips' />
    </Container>
  )
}
