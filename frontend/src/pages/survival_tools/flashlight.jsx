import { Container } from '@mui/material'
import React from 'react'
import CustomAppBar from '../../components/CustomAppBar'
import BottomNav from '../../components/BottomNav'

export default function flashlight() {
  return (
    <Container>
      <CustomAppBar headerName={"Flashlight"} haveBackButton={true} />
      <BottomNav page='dashboard' />
    </Container>
  )
}
