import React from "react";

export default function CardComponet({ text, icon, image }) {
  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    width: "100%",
    height: "85%",
    padding: "0",
  };
  return (
    <div className="card">
      <div className="cardImage" style={imageStyle}></div>
      <div className="card-text">
        <h2>{text}</h2>
      </div>
      <h3>{icon}</h3>
    </div>
  );
}
