import React from 'react';
import { Container, Typography } from '@mui/material'
import BottomNav from '../components/BottomNav'

import { fetchData } from '../apis';

export default function monitoringReport() {

    const [data, setData] = React.useState();

    async function getData() {
        try {
            const geophoneData = await fetchData();
            console.log(geophoneData);
            // Access the array and perform further operations
        } catch (error) {
            console.error(error);
        }
    }

    getData();

    return (
        <Container>
            <Typography>Monitoring Reports!</Typography>

            <BottomNav page='monitoring_reports' />
        </Container>
    )
}
