import React from "react";

import Donut from "./charts/Donut";

export default function FixedCostPanel() {
  return (
    <div className="dataBox fixedCostPanel">
      <h2>FIXED COST</h2>
      <Donut />
      Total: {26000}
    </div>
  );
}
