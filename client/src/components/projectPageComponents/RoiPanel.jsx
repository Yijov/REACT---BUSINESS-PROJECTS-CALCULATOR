import React from "react";

export default function RoiPanel({ ROI }) {
  return (
    <div className="dataBox roiPanel">
      <h2>ROI TIME</h2>
      <br />
      <p>{ROI}</p>
    </div>
  );
}
