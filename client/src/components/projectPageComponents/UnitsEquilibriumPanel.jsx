import React from "react";

export default function UnitsEquilibriumPanel() {
  return (
    <div className="dataBox unitsEquilibriumPanel">
      <h2>EQUILIBRIUM BY PRODUCT</h2>
      <br />
      <table>
        <thead>
          <th>Producto</th>
          <th>Costo</th>
          <th>Precio</th>
          <th>Margen Bruto</th>
          <th>Margen Procentual</th>
          <th>Participación</th>
          <th>EQ-Unds</th>
          <th>EQ-Vts</th>
          <tbody></tbody>
        </thead>
      </table>
    </div>
  );
}
