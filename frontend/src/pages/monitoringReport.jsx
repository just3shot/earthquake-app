import React from 'react';
import { Container, Typography, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, AppBar } from '@mui/material'

import PredictionReport from '../components/predictionReport';
import BottomNav from '../components/BottomNav';

export default function monitoringReport() {

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', pb: '32px', backgroundColor: '#F2F3F5', width: '100%' }}>
            <AppBar>
                <Typography variant="h5" sx={{ padding: 1, backgroundColor: 'white', color: 'black' }}>
                    Monitoring Reports
                </Typography>
            </AppBar>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PredictionReport countryName="Malaysia" />
                </Grid>

                <Grid item xs={12}>
                    <PredictionReport countryName="Malaysia" />
                </Grid>
            </Grid>
            <BottomNav page="monitoring_reports" />
        </Container>
    )
}
