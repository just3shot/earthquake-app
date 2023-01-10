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

import EarthquakeImage from './assets/earthquake.jpg';
import EarthquakeImage1 from './assets/earthquake1.jpg';
import EarthquakeImage2 from './assets/earthquake2.jpg';

export default function home() {


    const navigate = useNavigate();
    const [value, setValue] = React.useState("Dashboard");
    const [data, setData] = useState(null);

    const earthquakeImage = [EarthquakeImage, EarthquakeImage1, EarthquakeImage2];

    function handleClick(directory) {
        navigate(`/earthquake/${directory}`);
    }

    return (
        <Container>
            <AppBar>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    {value}
                </Typography>
            </AppBar>
            {value === "Dashboard" &&
                <Box>
                    <Box sx={{
                        display: 'flex',
                        maxWidth: "100vw",
                        maxHeight: 300,
                        backgroundColor: 'red',
                    }}
                    >
                        <ImageList sx={{ overflowX: 'scroll' }}>
                            {earthquakeImage.map((image, index) => (
                                <ImageListItem key={index}>
                                    <img src={image} alt="earthquake image" />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                    <Card sx={{ maxWidth: 500, mb: 5 }}>
                        <CardMedia
                            component="img"
                            alt="earthquake"
                            height="140"
                            image={EarthquakeImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Earthquake
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Earthquake Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna est, lobortis quis eros a, viverra eleifend felis. In pellentesque tellus eu venenatis sodales. Suspendisse dignissim venenatis sollicitudin. Etiam a feugiat ex. Nam aliquet aliquet massa eu eleifend. Pellentesque suscipit quam eget turpis blandit placerat
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row-reverse',
                            }}>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </Box>
                        </CardActions>
                    </Card>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                            <Card sx={{ minHeight: 200 }}>
                                <CardActionArea href="/earthquake/tohoku_earthquake">
                                    <CardContent>
                                        <Typography gutterBottom>Tohoku Earthquake</Typography>
                                        <Typography>Magnitude: 9.1</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ minHeight: 200 }}>
                                <CardActionArea href="/earthquake/sumatra_earthquake">
                                    <CardContent>
                                        <Typography gutterBottom>Sumatra Earthquake (2012)</Typography>
                                        <Typography>Magnitude: 8.6</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mt: 2, mb: 5 }} />
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
