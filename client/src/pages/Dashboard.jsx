import React from "react";
import Card from "../components/CardComponet";
import planing from "../images/planing.jpg";
import archived from "../images/archived.jpg";
import banner from "../images/banner2.jpg";
export default function Dashboard() {
  const bannerBackgound = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
  };
  return (
    <div className="page">
      <h2 className="sectionName">DASHBOARD</h2>
      <div className="cardSection" style={bannerBackgound}>
        <Card text={"New Project"} icon={"Icon"} image={planing} />
        <Card text={"Archived"} icon={"Icon"} image={archived} />
      </div>
    </div>
  );
}
