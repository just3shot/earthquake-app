import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Box } from '@mui/material';

function LineChart({ chartData }) {

    const options = {
        responsive: true, // Enable responsiveness
        maintainAspectRatio: false,
    };

    return (
        <Box sx={{ width: '100%', minHeight: '500px' }}>
            <Line data={chartData} options={options} />
        </Box>
    )
}

export default LineChart;