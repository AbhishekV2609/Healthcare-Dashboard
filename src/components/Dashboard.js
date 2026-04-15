import React, { useState } from "react";
import Chart from "./Chart";
import { Heart, Thermometer, Activity } from "lucide-react";

const Dashboard = ({ patient }) => {

  const [months, setMonths] = useState(6);

  const history = patient.diagnosis_history.slice(-months);
  const latest = history[history.length - 1];

  return (
    <div className="dashboard">

      {/* TITLE */}
      <h2 className="main-title">Diagnosis History</h2>

      {/* BLOOD PRESSURE */}
      <div className="bp-card">

        {/* LEFT */}
        <div className="bp-chart">
          <div className="bp-header">
            <h3>Blood Pressure</h3>

            {/* 🔥 CLEAN DROPDOWN WITH ARROW */}
            <div className="dropdown-wrapper">
              <select
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="dropdown"
              >
                {[...Array(12)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    Last {i + 1} month{i === 0 ? "" : "s"}
                  </option>
                ))}
              </select>

              <span className="arrow">▾</span>
            </div>

          </div>

          <Chart history={history} />
        </div>

        {/* RIGHT */}
        <div className="bp-info">

          <div className="info-box">
            <div className="row">
              <span className="dot pink-dot"></span>
              <p>Systolic</p>
            </div>
            <h2>{latest.blood_pressure.systolic.value}</h2>
            <small>Higher than Average</small>
          </div>

          <div className="info-box">
            <div className="row">
              <span className="dot purple-dot"></span>
              <p>Diastolic</p>
            </div>
            <h2>{latest.blood_pressure.diastolic.value}</h2>
            <small>Lower than Average</small>
          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="stats">

        <div className="stat-box blue">
          <Activity size={28} />
          <p>Respiratory Rate</p>
          <h3>{latest.respiratory_rate.value} bpm</h3>
          <small>Normal</small>
        </div>

        <div className="stat-box pink">
          <Thermometer size={28} />
          <p>Temperature</p>
          <h3>{latest.temperature.value}°F</h3>
          <small>Normal</small>
        </div>

        <div className="stat-box purple">
          <Heart size={28} />
          <p>Heart Rate</p>
          <h3>{latest.heart_rate.value} bpm</h3>
          <small>Lower than Average</small>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;