import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Container, IconButton, Typography } from '@mui/material'

import WhistleSound from '../../assets/mixkit-police-whistle.wav'
import BottomNav from '../../components/BottomNav';
import CustomAppBar from '../../components/CustomAppBar';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export default function whistle() {

    const navigate = useNavigate();

    return (
        <Container>
            <CustomAppBar headerName={"Whistle"} haveBackButton={true} />
            <Box>
                <audio src={WhistleSound} loop={true} autoPlay={true} />
                <VolumeUpIcon sx={{ fontSize: '100px', color: '#990000' }} />
            </Box>
            <BottomNav page='dashboard' />
        </Container>
    )
}
