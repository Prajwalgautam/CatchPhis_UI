import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);

const Analytics = () => {
    // Sample data
    const barData = {
        labels: ['Safe', 'Phishing Detected'],
        datasets: [
            {
                label: 'Sites',
                data: [10, 5],
                backgroundColor: ['#36a2eb', '#ff6384'],
            },
        ],
    };

    const pieData = {
        labels: ['Safe', 'Phishing Detected'],
        datasets: [
            {
                data: [10, 5],
                backgroundColor: ['#36a2eb', '#ff6384'],
            },
        ],
    };

    // API endpoints for fetching data
    // const fetchBarData = async () => {
    //     const response = await fetch('/api/bar-data');
    //     const data = await response.json();
    //     // Process the data and update the state
    // };

    // const fetchPieData = async () => {
    //     const response = await fetch('/api/pie-data');
    //     const data = await response.json();
    //     // Process the data and update the state
    // };

    return (
        <div>
            <div style={{ width: '50%', margin: 'auto' }}>
                <h3>Site Status Overview</h3>
                <Bar data={barData} />
            </div>
            <div style={{ width: '50%', margin: 'auto' }}>
                <h3>Site Status Distribution</h3>
                <Pie data={pieData} />
            </div>
        </div>
    );
}

export default Analytics;
