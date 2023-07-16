import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Card, CardActionArea, CardContent, Container, Divider, Grid, IconButton, Typography } from '@mui/material'

import BottomNav from '../components/BottomNav'
import CustomAppBar from '../components/CustomAppBar';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FlagIcon from '@mui/icons-material/Flag';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LightbulbIcon from '@mui/icons-material/Lightbulb';


export default function survivalTools() {

    const navigate = useNavigate();

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', pt: '32px', pb: '32px', alignItems: 'center', backgroundColor: '#F2F3F5' }}>
            <CustomAppBar headerName={"Survival Tools"} haveBackButton={true} />

            <Grid container spacing={2}>
                <Grid item xs={6} sx={{ display: 'flex' }}>
                    <Card sx={{ display: 'flex', width: '100%', borderRadius: 5 }}>
                        <CardActionArea onClick={() => navigate("/survivaltools/whistle")}>
                            <VolumeUpIcon sx={{ color: '#990000', fontSize: '100px' }} />
                            <Typography gutterBottom variant='h5'>
                                <strong>Whistle</strong>
                            </Typography>
                            <Typography gutterBottom variant='subtitle1' sx={{ lineHeight: '1em' }}>
                                Obviously a whistle
                            </Typography>
                            <Typography variant='subtitle2'>
                                Tap to Run
                            </Typography>

                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={6} sx={{ display: 'flex' }}>
                    <Card sx={{ display: 'flex', width: '100%', borderRadius: 5 }}>
                        <CardActionArea onClick={() => navigate('/survivaltools/visual_SOS')}>
                            <CardContent>
                                <FlagIcon sx={{ color: '#990000', fontSize: '100px' }} />
                                <Typography gutterBottom variant='h5'>
                                    <strong>Visual SOS</strong>
                                </Typography>
                                <Typography gutterBottom variant='subtitle1' sx={{lineHeight: '1em'}}>
                                    Emits visual SOS signals
                                </Typography>
                                <Typography variant='subtitle2'>
                                    Tap to Run
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={6} sx={{ display: 'flex' }}>
                    <Card sx={{ display: 'flex', width: '100%', borderRadius: 5 }}>
                        <CardActionArea onClick={() => navigate('/survivaltools/first_aid')}>
                            <CardContent>
                                <LocalHospitalIcon sx={{ color: '#990000', fontSize: '100px' }} />
                                <Typography gutterBottom variant='h5'>
                                    <strong>First Aid</strong>
                                </Typography>
                                <Typography gutterBottom variant='subtitle1' sx={{ lineHeight: '1em' }}>
                                    Displays some first aid procedures
                                </Typography>
                                <Typography variant='subtitle2'>
                                    Tap to View
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={6} sx={{ display: 'flex' }}>
                    <Card sx={{ display: 'flex', width: '100%', borderRadius: 5 }}>
                        <CardActionArea onClick={() => navigate('/survivaltools/flashlight')}>
                            <CardContent>
                                <LightbulbIcon sx={{ color: '#990000', fontSize: '100px' }} />
                                <Typography gutterBottom variant='h5'>
                                    <strong>Flashlight</strong>
                                </Typography>
                                <Typography gutterBottom variant='subtitle1' sx={{ lineHeight: '1em' }}>
                                    Obviously a flashlight
                                </Typography>
                                <Typography variant='subtitle2'>
                                    Tap to Run
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>


            <BottomNav page='dashboard' />
        </Container>
    )
}