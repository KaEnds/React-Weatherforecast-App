import React from 'react'
import converttemp from '../function/convertfaren';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );


function Weathergraph(datas) {

    const grahpdata = {datas}.datas.props.forecast
    const minValue = Math.min.apply(Math, grahpdata.map(low => converttemp(low.low)))
    const maxValue = Math.max.apply(Math, grahpdata.map(low => converttemp(low.low)))

    const labels = grahpdata.map(day => day.day);

    const options = {
        responsive: true,
        scales: {
            y:
              {
                min: minValue - 3,
                max: maxValue + 15,
                stepSize: 1,
              },
        },
        plugins: {

        }
    };

    const data = {
      labels,
      datasets: [
        {
          label: 'Min Temperature',
          data: grahpdata.map(low => converttemp(low.low)),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgb(255, 99, 132, 0.6)',
          tension: 0.3,
          fill: true,
          borderWidth: 3
          
        },
        {
          label: 'Max Temperature',
          data: grahpdata.map(low => converttemp(low.high)),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          tension: 0.3,
          fill: true,
          borderWidth: 3
        },
      ],
    };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  )
}

export default Weathergraph
