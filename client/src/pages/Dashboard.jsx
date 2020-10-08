import React from "react";
import Card from "../components/CardComponet";
import Nav from "../components/Nav";

export default function Dashboard() {
  return (
    <div className="page">
      <h2 className="sectionName">DASHBOARD</h2>
      <div className="cardSection">
        <Card text={"New Project"} icon={"Icon"} />
        <Card text={"Archived"} icon={"Icon"} />
      </div>
      <Nav />
    </div>
  );
}
