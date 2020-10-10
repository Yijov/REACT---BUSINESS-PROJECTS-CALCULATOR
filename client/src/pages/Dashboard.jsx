import React from "react";
import banner from "../images/banner2.jpg";
export default function Dashboard() {
  const bannerBackgound = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
  };
  return (
    <div className="page">
      <h2 className="sectionName">DASHBOARD</h2>
      <div className="dashboard" style={bannerBackgound}></div>
    </div>
  );
}
