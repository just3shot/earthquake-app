import React from 'react'
import { Container, Typography, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, AppBar, Snackbar, Alert, useTheme, useMediaQuery } from '@mui/material'
import { fetchData } from '../apis';

import BottomNav from '../components/BottomNav'
import LineChart from '../components/LineChart';
import CustomAppBar from '../components/CustomAppBar';

export default function malaysiaReport() {

    const [geophoneData, setGeophoneData] = React.useState([]);
    const [openWarningSnackBar, setOpenWarningSnackBar] = React.useState(false);
    const [testData, setTestData] = React.useState({
        labels: geophoneData.map((data) => data.time),
        datasets: [{
            label: "Geophone Value",
            data: geophoneData.map((data) => data.geophone_value),
        }]
    })

    const theme = useTheme();
    const isSmallViewport = useMediaQuery(theme.breakpoints.down('sm'));
    const snackbarPosition = isSmallViewport ? { vertical: 'top', horizontal: 'center' } : { vertical: 'bottom', horizontal: 'left' };

    const handleCloseWarningSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenWarningSnackBar(false);
    };

    function checkGeophoneWarning(geophoneData) {
        for (let data of geophoneData) {
            const geophoneValue = parseInt(data.geophone_value);
            if (geophoneValue > 100) {
                console.log("one of geophone value more than 100");
                setOpenWarningSnackBar(true);
                return;
            }
        }
    }

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
        checkGeophoneWarning(geophoneData);
    }, [geophoneData]);

    return (
        <Container sx={{ backgroundColor: '#F2F3F5', display: 'flex', justifyContent: 'center', pt: '32px', pb: '32px' }}>
            <CustomAppBar headerName={"Monitoring Reports"} haveBackButton={true} />
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
                <Grid item sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <LineChart chartData={testData} />
                </Grid>
            </Grid>

            <Snackbar
                open={openWarningSnackBar}
                autoHideDuration={6000}
                onClose={handleCloseWarningSnackBar}
                anchorOrigin={snackbarPosition}
            >
                <Alert onClose={handleCloseWarningSnackBar} severity='warning'>
                    EARTHQUAKE WARNING ACTIVATED!
                </Alert>
            </Snackbar>
            <BottomNav page="monitoring_reports" />
        </Container>
    )
}
