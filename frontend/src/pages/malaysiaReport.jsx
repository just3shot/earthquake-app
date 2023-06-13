import React from 'react'
import { Container, Typography, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, AppBar } from '@mui/material'
import { fetchData } from '../apis';

import BottomNav from '../components/BottomNav'
import LineChart from '../components/LineChart';

export default function malaysiaReport() {
    
    const [geophoneData, setGeophoneData] = React.useState([]);

    const [testData, setTestData] = React.useState({
        labels: geophoneData.map((data) => data.time),
        datasets: [{
            label: "Geophone Value",
            data: geophoneData.map((data) => data.geophone_value),
        }]
    })

    React.useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const result = await fetchData();
                if (result) {
                    setGeophoneData(result); // Set the fetched data in the state
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchDataAsync();

    }, []);

    React.useEffect(() => {
        setTestData({
            labels: geophoneData.slice().reverse().map((data) => data.time),
            datasets: [{
                label: "Geophone Value",
                data: geophoneData.slice().reverse().map((data) => data.geophone_value),
            }],
        });
    }, [geophoneData]);
    
    return (
        <Container sx={{ backgroundColor: '#F2F3F5', display: 'flex', justifyContent: 'center' }}>
            <AppBar>
                <Typography variant="h5" sx={{ flexGrow: 1, padding: 1, backgroundColor: 'white', color: 'black' }}>
                    Monitoring Reports
                </Typography>
            </AppBar>
            <Grid>
                <Grid item>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'>Date</TableCell>
                                    <TableCell align='center'>Time</TableCell>
                                    <TableCell align='center'>Geophone Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {geophoneData &&
                                    geophoneData.map((row) => (
                                        <TableRow key={row.date + row.time}>
                                            <TableCell align='center'>{row.date.substring(0, 10)}</TableCell>
                                            <TableCell align='center'>{row.time}</TableCell>
                                            <TableCell align='center'>{row.geophone_value}</TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
                    <LineChart chartData={testData} />
                </Grid>
            </Grid>

            <BottomNav page="monitoring_reports" />
        </Container>
    )
}
