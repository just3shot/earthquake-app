import { AppBar, Box, Card, CardActionArea, CardContent, Container, Grid, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import MalaysiaMap from '../assets/malaysiaMap.png';
import IndonesiaMap from '../assets/IndonesiaMap.png';

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

    const mapImageToUse = (countryName === "Indonesia") ? IndonesiaMap : MalaysiaMap;

    React.useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            
            const currentTimeString = date.toLocaleTimeString('en-US', {
                hourCycle: 'h23',
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

        <Card sx={{ display: 'flex' }}>
            <CardActionArea onClick={() => navigate(`/monitoring_reports/${countryName}`)}>
                <Box sx={{ position: 'relative', textAlign: 'left', color: 'black' }}>
                    <img src={mapImageToUse} alt="Image" style={{ objectFit: 'cover', width: '100%', maxHeight: '400px' }} />    
                </Box>

                <CardContent>
                    <Typography variant='h5' sx={{ display: 'flex', alignItems: 'center' }} component="div">
                        <LanguageIcon sx={{ marginRight: '0.5em' }} />
                        {countryName}
                    </Typography>
                    <Typography variant='h5' sx={{ display: 'flex', alignItems: 'center' }} component="div">
                        <CalendarMonthIcon sx={{ marginRight: '0.5em' }} />
                        {currentTime.date}
                    </Typography>
                    <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center' }} component="div">
                        <AccessTimeIcon sx={{ marginRight: '0.5em' }} />
                        {currentTime.time}
                    </Typography>
                </CardContent>

            </CardActionArea>
        </Card>

    )
}
