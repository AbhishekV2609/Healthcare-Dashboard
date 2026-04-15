import React from "react";

const Profile = ({ patient }) => {
  return (
    <div className="profile">
      <img src={patient.profile_picture} alt="profile" />
      <h2>{patient.name}</h2>

      <p>DOB: {patient.date_of_birth}</p>
      <p>Gender: {patient.gender}</p>
      <p>Contact: {patient.phone_number}</p>
      <p>Emergency: {patient.emergency_contact}</p>
      <p>Insurance: {patient.insurance_type}</p>

      <button onClick={() => alert("Full Info Viewed")}>
        Show All Information
      </button>
    </div>
  );
};

export default Profile;