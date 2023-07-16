import React from 'react'
import { Container, Typography, AppBar } from '@mui/material'
import BottomNav from '../components/BottomNav'
import CustomAppBar from '../components/CustomAppBar'
import NewsList from '../components/NewsList'

export default function earthquakeNews() {

    return (
        <Container sx={{ backgroundColor: '#F2F3F5' }}>
            <CustomAppBar headerName={"Earthquake News"} />
            <NewsList />
            <BottomNav page='earthquake_news' />
        </Container>
    )
}
