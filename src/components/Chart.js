import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Chart = ({ history }) => {
  const labels = history.map(
    h => `${h.month}, ${h.year}`
  );

  const systolic = history.map(
    h => h.blood_pressure.systolic.value
  );

  const diastolic = history.map(
    h => h.blood_pressure.diastolic.value
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolic,
        borderColor: "#e879f9",
        backgroundColor: "#e879f9",
        tension: 0.4,
        pointRadius: 5
      },
      {
        label: "Diastolic",
        data: diastolic,
        borderColor: "#6366f1",
        backgroundColor: "#6366f1",
        tension: 0.4,
        pointRadius: 5
      }
    ]
  };

  const options = {
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20
        }
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default Chart;