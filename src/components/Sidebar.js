import React from "react";

const Sidebar = ({ list, setSelected, selected }) => {
  return (
    <div className="sidebar">
      <h3>Patients</h3>

      {list.map((p, i) => (
        <div
          key={i}
          className={`patient ${selected.name === p.name ? "active" : ""}`}
          onClick={() => setSelected(p)}
        >
          <img src={p.profile_picture} alt={p.name} />
          <div>
            <p>{p.name}</p>
            <small>{p.gender}, {p.age}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;