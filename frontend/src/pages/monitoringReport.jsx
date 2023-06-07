import React from 'react';
import { Container, Typography, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'
import BottomNav from '../components/BottomNav'

import { fetchData } from '../apis';

export default function monitoringReport() {

    const [geophoneData, setGeophoneData] = React.useState();

    React.useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const result = await fetchData();
                console.log(result)
                setGeophoneData(result); // Set the fetched data in the state
            } catch (error) {
                console.error(error);
            }
        };

        fetchDataAsync();
    }, []);

    return (
        <Container>
            <Typography gutterBottom>Monitoring Reports</Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Geophone Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {geophoneData && geophoneData.map((row) => (
                            <TableRow>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.time}</TableCell>
                                <TableCell>{row.geophone_value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <BottomNav page='monitoring_reports' />
        </Container>
    )
}
