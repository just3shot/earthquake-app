import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, IconButton, Typography } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function CustomAppBar({ headerName, haveBackButton }) {

    const navigate = useNavigate();

    return (
        <AppBar color="inherit">
            {haveBackButton &&
                <Box sx={{ position: 'absolute', left: 10 }}>
                    <IconButton onClick={() => navigate(-1)} >
                        <ArrowBackIcon />
                    </IconButton>
                </Box>
            }
            <Box sx={{ padding: 1, backgroundColor: '#990000' }}>
                <Typography variant="h5" sx={{ color: 'white' }}>
                    {headerName}
                </Typography>
            </Box>
        </AppBar>
    )
}
