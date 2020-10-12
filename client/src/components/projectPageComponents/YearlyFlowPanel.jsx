import React from "react";
import StackedBar from "./charts/StackedBar";

export default function YearlyFlowPanel() {
  return (
    <div className="dataBox yearlyFlowPanel">
      <h2>YEARLY FLOW</h2>
      <StackedBar />
    </div>
  );
}
