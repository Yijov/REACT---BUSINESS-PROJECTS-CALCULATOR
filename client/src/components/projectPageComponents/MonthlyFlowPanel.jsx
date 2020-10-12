import React from "react";
import StackedBar from "./charts/StackedBar";

export default function MonthlyFlowPanel() {
  return (
    <div className="dataBox monthlyFlowPanel">
      <h2>MONTHLY FLOW</h2>
      <StackedBar />
    </div>
  );
}
