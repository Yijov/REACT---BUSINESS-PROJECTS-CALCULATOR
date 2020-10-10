import React from "react";

export default function YearlyFlowPanel() {
  return (
    <div className="dataBox yearlyFlowPanel">
      <h2>YEARLY FLOW</h2>
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
