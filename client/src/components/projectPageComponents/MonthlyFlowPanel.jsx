import React from "react";

export default function MonthlyFlowPanel() {
  return (
    <div className="dataBox monthlyFlowPanel">
      <h2>MONTHLY FLOW</h2>
      <br />
      <p>
        Sales:<span>{}</span>
      </p>
      <p>
        Sales Cost: <span>{}</span>
      </p>
      <p>
        Fixed Cost: <span>{}</span>
      </p>
      <p>
        Taxes:<span>{}</span>
      </p>
      <br />
      <p>Net Income:</p> <span>{}</span>
    </div>
  );
}
