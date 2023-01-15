import React, { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigate } from "react-router-dom";

import config from '../config';
import { BottomNavigation, BottomNavigationAction, Container, Button, Box, Paper, AppBar, Typography, Card, CardActions, Grid, CardContent, Link, CardMedia, Divider, CardActionArea, List, ListItem, ListItemText, ImageListItem, ImageList, Menu, MenuItem, ListItemIcon, MenuList, Stack, IconButton, ListItemButton, Icon } from '@mui/material';

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
import HeartRed from '../assets/heart_red.png';
import HeartRedSvg from '../assets/heart_red.svg';
import FirstAidKit from '../assets/firstaidkit2.png';
import FirstAidKitSvg from '../assets/firstaidkit2.svg';


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

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    console.log(viewportWidth);
    return (
        <Container sx={{ backgroundColor: '#F2F3F5' }}>
            <AppBar>
                <Typography variant="h5" sx={{ flexGrow: 1, padding: 1, backgroundColor: 'white', color: 'black' }}>
                    {value}
                </Typography>
            </AppBar>

            <Box>
                <Box sx={{
                    display: 'flex',
                    overflowX: 'scroll',
                    width: { xs: '100%', sm: '510px', md: '510px' },
                    mt: 5, mb: 2,
                }}>
                    {earthquakeImages.map((earthquake, index) => (
                        <Card sx={{ flexShrink: 0, maxWidth: '100%', borderRadius: 5, position: 'relative' }} key={index}>
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
                                <Typography variant="h5">Earthquake Prediction</Typography>
                                <Typography variant="body2">{earthquake.text}</Typography>
                            </Box>
                        </Card>
                    ))}
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card sx={{ borderRadius: 5, p: 2 }}>
                            <CardActionArea href="/prediction_reports">
                                <Grid container rowSpacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Grid item xs={10} sm='auto' md='auto' lg='auto' xl='auto'>
                                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Prediction Reports</Typography>
                                        <Typography variant='subtitle2' color='#bdbdbd'>Earthquake prediction reports for your location</Typography>

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
                        <Card sx={{ display: 'flex', borderRadius: 5, mb: 2, alignItems: 'stretch' }}>
                            <CardActionArea href="/survivaltips">
                                <CardContent>
                                    <img src={HeartRed} height='100' width='100' />
                                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Survival Tips</Typography>
                                    <Typography variant='subtitle2' color="#bdbdbd">Rules for saving your life in case of earthquake</Typography>
                                </CardContent>
                                <Typography variant='subtitle2' color="#bdbdbd" alignSelf='flex-end'>Tap to View</Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={6}>
                        <Card sx={{ display: 'flex', borderRadius: 5, mb: 2, alignItems: 'stretch' }}>
                            <CardActionArea href="/survivaltools">
                                <CardContent>
                                    <img src={FirstAidKit} height='100' width='100' />
                                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Survival Tools</Typography>
                                    <Typography variant='subtitle2' color="#bdbdbd">Tools to help you after a devastating earthquake</Typography>

                                </CardContent>
                                <Typography variant='subtitle2' color="#bdbdbd" alignSelf='flex-end'>Tap to Access</Typography>
                            </CardActionArea>

                        </Card>
                    </Grid>
                </Grid>
                <Card sx={{ mb: 2, borderRadius: 5 }}>
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

            </Box>

            <BottomNav page='dashboard' />
        </Container>
    )
}
