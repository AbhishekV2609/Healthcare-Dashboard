import React, { useEffect, useState } from "react";
import { fetchPatients } from "./api";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchPatients().then((data) => {
      setList(data);
      setSelected(data.find(p => p.name === "Jessica Taylor"));
    });
  }, []);

  if (!selected) return <h2>Loading...</h2>;

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar list={list} setSelected={setSelected} selected={selected}/>
        <Dashboard patient={selected} />
        <Profile patient={selected} />
      </div>
    </>
  );
}

export default App;