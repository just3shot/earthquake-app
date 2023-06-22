import React from 'react';
import { Container, Typography, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, AppBar } from '@mui/material'

import PredictionReport from '../components/predictionReport';
import BottomNav from '../components/BottomNav';
import CustomAppBar from '../components/CustomAppBar';

export default function monitoringReport() {

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', pt: '48px', pb: '48px', backgroundColor: '#F2F3F5' }} maxWidth="sm">
            <CustomAppBar headerName={"Monitoring Reports"} />
            <Grid container spacing={5}>
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
