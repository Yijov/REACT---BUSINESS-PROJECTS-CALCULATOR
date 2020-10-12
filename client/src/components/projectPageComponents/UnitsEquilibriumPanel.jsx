import React from "react";

export default function UnitsEquilibriumPanel() {
  return (
    <div className="dataBox unitsEquilibriumPanel">
      <h2>EQUILIBRIUM BY PRODUCT</h2>
      <br />
      <table>
        <thead>
          <tr>
            <th>Products</th>
            <th>Cost</th>
            <th>Price</th>
            <th>Brute Margin</th>
            <th>% Margin</th>
            <th>Participation</th>
            <th>EQ-Units</th>
            <th>EQ-Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Something</td>
            <td>1500</td>
            <td>4000</td>
            <td>2500</td>
            <td>30%</td>
            <td>100%</td>
            <td>2000</td>
            <td>150</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
