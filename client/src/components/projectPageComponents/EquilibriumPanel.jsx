import React from "react";

export default function EquilibriumPanel({ yearlyEq, monthlyEq }) {
  return (
    <div className="dataBox equilibriumPanel">
      <p>EQUILIBRIUM</p>

      <p>Monthly Eq: {monthlyEq}</p>
      <p>Yearly Eq: {yearlyEq}</p>
    </div>
  );
}
