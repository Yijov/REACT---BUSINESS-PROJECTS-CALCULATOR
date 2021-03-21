import React, { useContext } from "react";
import { CurrentProjectContext } from "../../context/CurrentProjectContext";

export default function EquilibriumPanel() {
  const { currentProjecBody } = useContext(CurrentProjectContext);

  const { equilibrium } = currentProjecBody;
  return (
    <div className="dataBox equilibriumPanel">
      <p>EQUILIBRIUM</p>

      {equilibrium && <p>Monthly: ${equilibrium.eqAmount.toFixed(2)}</p>}
      {equilibrium && <p>Yearly: ${equilibrium.yearlyEqAmount.toFixed(2)}</p>}
    </div>
  );
}
