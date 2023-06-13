import { AppBar, Box, Card, CardActionArea, CardContent, Container, Grid, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import MalaysiaMap from '../assets/malaysiaMap.png';

import LanguageIcon from '@mui/icons-material/Language';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function predictionReport({ countryName }) {

    const navigate = useNavigate();

    const [currentTime, setCurrentTime] = React.useState({
        countryName: countryName,
        date: '',
        time: '',
    });

    React.useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const formattedDate = date.toISOString().split('T')[0];
            const currentTimeString = date.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });

            setCurrentTime(prevTime => ({
                ...prevTime,
                date: formattedDate,
                time: currentTimeString,
            }));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Container>
            <Card sx={{ display: 'flex', maxHeight: '400px' }}>
                <CardActionArea onClick={() => navigate(`/monitoring_reports/${countryName}`)}>

                    <img src={MalaysiaMap} alt="Image" style={{ width: '100%', height: '50%', objectFit: 'cover' }} />

                    <CardContent>
                        <Typography variant='h5' sx={{ display: 'flex', alignItems: 'center' }} component="div">
                            <CalendarMonthIcon fontSize='large' sx={{ marginRight: '0.5em' }} />
                            {currentTime.date}
                        </Typography>
                        <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center' }} component="div">
                            <AccessTimeIcon sx={{ marginRight: '0.5em' }} />
                            {currentTime.time}
                        </Typography>
                    </CardContent>

                </CardActionArea>
            </Card>

        </Container>
    )
}
