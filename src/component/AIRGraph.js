import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { convertTime } from "../function/convertTime";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Airgraph() {
  const Airdate = useSelector((state) => state.airQual.Date);
  const air_components = useSelector((state) => state.airQual.components);
  const co = air_components.map((e) => e.co);
  const nh3 = air_components.map((e) => e.nh3);
  const no = air_components.map((e) => e.no);
  const no2 = air_components.map((e) => e.no2);
  const pm2_5 = air_components.map((e) => e.pm2_5);
  const pm10 = air_components.map((e) => e.pm10);
  const so2 = air_components.map((e) => e.so2);
  // const date = Airdate.map((date) => convertTime(date)[0]);
  const Time = Airdate.map((date) => convertTime(date)[1]);

  const labels = Time;

  const options = {
    responsive: true,
    scales: {
      y: [{
        title: {
          display: true,
          text: 'Your Title'
        }
      }]
    },
    plugins: {},
  };

  const data = {
    labels,
    datasets: [
      {
        label: "CO",
        data: co,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.3,
        borderWidth: 3,
      },
      {
        label: "NH3",
        data: nh3,
        borderColor: "rgb(53, 162, 235)",
        tension: 0.3,
        borderWidth: 3,
      },
      {
        label: "NO",
        data: no,
        borderColor: "rgb(151,209,86)",
        tension: 0.3,
        borderWidth: 3,
      },
      {
        label: "NO2",
        data: no2,
        borderColor: "rgb(255,180,0)",
        tension: 0.3,
        borderWidth: 3,
      },
      {
        label: "PM_2.5",
        data: pm2_5,
        borderColor: "rgb(156,247,207)",
        tension: 0.3,
        borderWidth: 3,
      },
      {
        label: "PM_10",
        data: pm10,
        borderColor: "rgb(0,68,85)",
        tension: 0.3,
        borderWidth: 3,
      },
      {
        label: "SO2",
        data: so2,
        borderColor: "rgb(255,177,193)",
        tension: 0.3,
        borderWidth: 3,
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}

export default Airgraph;
