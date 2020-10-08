import React from "react";

export default function CardComponet({ text, icon }) {
  return (
    <div className="card">
      <div className="card-text">
        <h2>{text}</h2>
      </div>

      <h3>{icon}</h3>
    </div>
  );
}
