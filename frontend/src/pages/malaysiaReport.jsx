import React from 'react'
import { Container, Typography, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, AppBar, Snackbar, Alert, useTheme, useMediaQuery, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemIcon } from '@mui/material'
import { fetchData } from '../apis';

import BottomNav from '../components/BottomNav'
import LineChart from '../components/LineChart';
import CustomAppBar from '../components/CustomAppBar';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';
import PushPinIcon from '@mui/icons-material/PushPin';
import WbShadeIcon from '@mui/icons-material/WbShade';

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

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    const currentTimeString = date.toLocaleTimeString('en-US', {
        hourCycle: 'h23',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    const dateTimeString = formattedDate + ' ' + currentTimeString;


    const handleCloseWarningSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenWarningSnackBar(false);
    };

    function checkGeophoneWarning(geophoneData) {
        for (let data of geophoneData) {
            const geophoneValue = parseInt(data.geophone_value);
            if (geophoneValue > 1) {
                console.log("one of geophone value more than 1");
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

            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Paper sx={{ mb: 2 }}>
                        <Grid container>
                            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                <ListItem >
                                    <ListItemIcon>
                                        <AccessTimeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={<b>Time</b>} secondary={dateTimeString} sx={{ fontWeight: 'bold' }} />
                                </ListItem>
                            </Grid>
                            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                <ListItem >
                                    <ListItemIcon>
                                        <PublicIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={<b>Distance</b>} secondary="6374.6 Km" />
                                </ListItem>
                            </Grid>

                            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PushPinIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={<b>Location</b>} secondary="54.490N, 160.796W" />
                                </ListItem>
                            </Grid>
                            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                <ListItem>
                                    <ListItemIcon>
                                        <WbShadeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={<b>Depth</b>} secondary="13.0 Km" />
                                </ListItem>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'><b>Date</b></TableCell>
                                    <TableCell align='center'><b>Time</b></TableCell>
                                    <TableCell align='center'><b>Geophone Value</b></TableCell>
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

                <Grid item xs={12}>
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
