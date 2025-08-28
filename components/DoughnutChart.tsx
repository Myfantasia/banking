"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1270, 3489, 2900],
                backgroundColor: [
                    '#0747b6', '#2265d8', '#2f91fa'
                ],
            }
        ],
        labels: ['KCB', 'Equity', 'Cooperative']
    }
    return <Doughnut 
      data={data}
      options={{
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            }
        }
      }}
    />
}

export default DoughnutChart
