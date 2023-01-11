import React, { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigate } from "react-router-dom";

import config from './config';
import { BottomNavigation, BottomNavigationAction, Container, Button, Box, Paper, AppBar, Typography, Card, CardActions, Grid, CardContent, Link, CardMedia, Divider, CardActionArea, List, ListItem, ListItemText, ImageListItem, ImageList } from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ReportIcon from '@mui/icons-material/Report';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FindInPageIcon from '@mui/icons-material/FindInPage';

import EarthquakeImage from './assets/earthquake4.jpg';
import EarthquakeImage1 from './assets/earthquake1.jpg';
import EarthquakeImage2 from './assets/earthquake2.jpg';
import HeartRed from './assets/heart_red.png';
import FirstAidKit from './assets/firstaidkit2.png';

export default function home() {


    const navigate = useNavigate();
    const [value, setValue] = React.useState("Dashboard");
    const [data, setData] = useState(null);

    const earthquakeImages = [
        { image: EarthquakeImage, text: "Earthquakes don't kill people. On the other hand, buildings do." },
        { image: EarthquakeImage1, text: "Small clusters of earthquakes may be warning sign of larger one to come." },
        { image: EarthquakeImage2, text: "Bigger earthquakes have more and larger aftershhocks." },
    ];

    function handleClick(directory) {
        navigate(`/earthquake/${directory}`);
    }

    return (
        <Container sx={{ backgroundColor: '#F2F3F5' }}>
            <AppBar>
                <Typography variant="h5" sx={{ flexGrow: 1, padding: 1, backgroundColor: 'white', color: 'black'}}>
                    {value}
                </Typography>
            </AppBar>
            {value === "Dashboard" &&
                <Box>
                    <Box sx={{ display: 'flex', overflowX: 'scroll', mb: 5, width: '80vw' }}>
                        {earthquakeImages.map((earthquake) => (
                            <Card sx={{ flexShrink: 0, maxWidth: '100%', borderRadius: 5, position: 'relative' }}>
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
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Card>
                                <Box align='left' sx={{ m: 2 }}>
                                    <Grid container rowSpacing={2} sx={{ alignItems: 'center' }}>
                                        <Grid item xs={10}>
                                            <Typography variant='h5'>Prediction Reports</Typography>
                                            <Typography variant='subtitle2' color='#bdbdbd'>Earthquake prediction reports for your location</Typography>
                                        </Grid>
                                        <Grid item xs={2} >
                                            <FindInPageIcon sx={{ fontSize: '50px', color: '#d74554' }} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant='subtitle2'>In order to generate reports for your current location, you need to make sure that you have enough reports available. We recommend that you periodically generate reports or when you travel to another location.</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Card>
                        </Grid>

                        <Grid item xs={6}>
                            <Card sx={{ width: '100%', height: '100%', mb:5}}>
                                <CardActionArea href="/earthquake/tohoku_earthquake">
                                    <CardContent>
                                        <img src={HeartRed} height='100' width='100' />
                                        <Typography variant='h5'>Survival Tips</Typography>
                                        <Typography variant='subtitle2' color="#bdbdbd">Rules for saving your life in case of earthquake</Typography>
                                    </CardContent>
                                    <Typography variant='subtitle2' color="#bdbdbd" alignSelf='flex-end'>Tap to View</Typography>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ width: '100%', height: '100%', mb:5}}>
                                <CardActionArea href="/earthquake/111">
                                    <CardContent>
                                        <img src={FirstAidKit} height='100' width='100' />
                                        <Typography variant='h5'>Survival Tools</Typography>
                                        <Typography variant='subtitle2' color="#bdbdbd">Tools to help you after a devastating earthquake</Typography>

                                    </CardContent>
                                    <Typography variant='subtitle2' color="#bdbdbd" alignSelf='flex-end'>Tap to Access</Typography>
                                </CardActionArea>

                            </Card>
                        </Grid>

                    </Grid>

                </Box>
            }
            {value === "Report" &&
                <Box>
                    <Typography>Prediction Report</Typography>
                </Box>
            }
            {value === "Crisis" &&
                <Box>
                    <Typography>Crisis Reporting</Typography>
                </Box>
            }
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        console.log(newValue);
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction value="Dashboard" label="Dashboard" icon={<DashboardIcon />} />
                    <BottomNavigationAction value="Report" label="Earthquake Report" icon={<ReportIcon />} />
                    <BottomNavigationAction value="Crisis" label="Crisis Alert" icon={<CrisisAlertIcon />} />
                </BottomNavigation>
            </Paper>
        </Container>
    )
}
