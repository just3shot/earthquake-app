import React, { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigate } from "react-router-dom";

import config from '../config';
import { BottomNavigation, BottomNavigationAction, Container, Button, Box, Paper, AppBar, Typography, Card, CardActions, Grid, CardContent, Link, CardMedia, Divider, CardActionArea, List, ListItem, ListItemText, ImageListItem, ImageList, Menu, MenuItem, ListItemIcon, MenuList, Stack, IconButton, ListItemButton, Icon, useMediaQuery, useTheme } from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ReportIcon from '@mui/icons-material/Report';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CookieIcon from '@mui/icons-material/Cookie';
import MailIcon from '@mui/icons-material/Mail';
import StarIcon from '@mui/icons-material/Star';

import EarthquakeImage from '../assets/earthquake1.jpg';
import EarthquakeImage1 from '../assets/earthquake4.jpg';
import EarthquakeImage2 from '../assets/earthquake2.jpg';
import HeartRed from '../assets/heart_red1.png';
import HeartRedSvg from '../assets/heart_red.svg';
import FirstAidKit from '../assets/firstaidkit3.png';
import FirstAidKitSvg from '../assets/firstaidkit2.svg';

import CustomAppBar from '../components/CustomAppBar';
import BottomNav from '../components/BottomNav';

export default function home() {


    const navigate = useNavigate();
    const [value, setValue] = React.useState("Dashboard");

    const earthquakeImages = [
        { image: EarthquakeImage, text: "Earthquakes don't kill people. On the other hand, buildings do." },
        { image: EarthquakeImage1, text: "Small clusters of earthquakes may be warning sign of larger one to come." },
        { image: EarthquakeImage2, text: "Bigger earthquakes have more and larger aftershhocks." },
    ];

    function handleClick(directory) {
        navigate(`/earthquake/${directory}`);
    }

    const theme = useTheme();
    const isXsOrSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', pb: '32px', backgroundColor: '#F2F3F5' }} maxWidth="sm">

            <CustomAppBar headerName={"Dashboard"} />

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{
                    display: 'flex',
                    width: { xs: '100%', sm: '510px', md: '510px' },
                    mt: 5, mb: 2,
                    overflowX: 'scroll',
                    scrollSnapType: 'x mandatory',
                }}
                >
                    {earthquakeImages.map((earthquake, index) => (
                        <Card sx={{ display: 'flex', flexShrink: 0, maxWidth: '100%', borderRadius: 5, position: 'relative', scrollSnapAlign: 'center' }} key={index}>
                            <CardMedia
                                component="img"
                                alt="earthquake"
                                src={earthquake.image}
                                width='100%'
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: '30%',
                                    left: 0,
                                    width: '100%',
                                    color: 'white',
                                }}
                            >
                                <Typography variant="h5">Earthquake Monitoring</Typography>
                                <Typography variant="body2">{earthquake.text}</Typography>
                            </Box>
                        </Card>
                    ))}
                </Box>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Card sx={{ borderRadius: 5, p: 2, mb: 1 }}>
                            <CardActionArea href="/monitoring_reports">
                                <Grid container rowSpacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Grid item xs={10} sm='auto' md='auto' lg='auto' xl='auto'>
                                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Earthquake Monitoring Reports</Typography>
                                        <Typography variant='subtitle2' color='#bdbdbd'>Earthquake monitoring reports for your location</Typography>

                                    </Grid>
                                    <Grid item xs={2} sm='auto' md='auto' lg='auto' xl='auto'>
                                        <FindInPageIcon sx={{ fontSize: '50px', color: '#990000' }} />
                                    </Grid>
                                    {false &&
                                        <Grid item xs={12}>
                                            <Typography variant='subtitle2'>In order to generate reports for your current location, you need to make sure that you have enough reports available. We recommend that you periodically generate reports or when you travel to another location.</Typography>
                                        </Grid>
                                    }
                                </Grid>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={6}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: 5, mb: 2, alignItems: 'stretch' }}>
                            <CardActionArea href="/survivaltips">
                                <CardContent>
                                    <img src={HeartRed} height='100' width='100' />
                                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                                        {isXsOrSm ?
                                            <div>
                                                Survival<br />Tips
                                            </div> :
                                            'Survival Tips'
                                        }
                                    </Typography>
                                    <Typography variant='subtitle2' color="#bdbdbd">Rules for saving your life in case of earthquake</Typography>
                                </CardContent>
                                <Typography variant='subtitle2' color="#bdbdbd" alignSelf='flex-end'>Tap to View</Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={6}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: 5, mb: 2, alignItems: 'stretch' }}>
                            <CardActionArea href="/survivaltools">
                                <CardContent>
                                    <img src={FirstAidKit} height='100' width='100' />
                                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                                        {isXsOrSm ?
                                            <div>
                                                Survival<br />Tools
                                            </div> :
                                            'Survival Tools'
                                        }
                                    </Typography>
                                    <Typography variant='subtitle2' color="#bdbdbd">Tools to help you after a devastating earthquake</Typography>

                                </CardContent>
                                <Typography variant='subtitle2' color="#bdbdbd" alignSelf='flex-end'>Tap to Access</Typography>
                            </CardActionArea>

                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card sx={{ mb: 2, mt: 2, borderRadius: 5 }}>
                            <List>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FormatQuoteIcon sx={{ fontSize: '40px', color: '#990000' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Terms and Conditions" secondary="Rules for using our application" />
                                    <ArrowForwardIosIcon />
                                </ListItemButton>
                                <Divider />
                                <ListItemButton>
                                    <ListItemIcon>
                                        <CookieIcon sx={{ fontSize: '40px', color: '#990000' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Privacy Policy" secondary="What information we collect" />
                                    <ArrowForwardIosIcon />
                                </ListItemButton>
                                <Divider />
                                <ListItemButton>
                                    <ListItemIcon>
                                        <MailIcon sx={{ fontSize: '40px', color: '#990000' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Support" secondary="Contact us by email" />
                                    <ArrowForwardIosIcon />
                                </ListItemButton>
                                <Divider />
                                <ListItemButton>
                                    <ListItemIcon>
                                        <StarIcon sx={{ fontSize: '40px', color: '#990000' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Leave Feedback" secondary="What do you think of the app?" />
                                    <ArrowForwardIosIcon />
                                </ListItemButton>
                            </List>
                        </Card>
                    </Grid>

                </Grid>

            </Box>

            <BottomNav page='dashboard' />
        </Container >
    )
}
