import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h2>Tech.Care</h2>
      <div className="nav">
        <span>Overview</span>
        <span className="active-tab">Patients</span>
        <span>Schedule</span>
        <span>Message</span>
        <span>Transactions</span>
      </div>
    </div>
  );
};

export default Header;