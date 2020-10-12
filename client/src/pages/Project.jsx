import React from "react";
import RoiPanel from "../components/projectPageComponents/RoiPanel";
import EquilibriumPanel from "../components/projectPageComponents/EquilibriumPanel";
import MonthlyFlowPanel from "../components/projectPageComponents/YearlyFlowPanel";
import YearlyFlowPanel from "../components/projectPageComponents/MonthlyFlowPanel";
import FixedCostPanel from "../components/projectPageComponents/FixedCostPanel";
import AssetsPannel from "../components/projectPageComponents/AssetsPannel";
import UnitsEquilibriumPanel from "../components/projectPageComponents/UnitsEquilibriumPanel";

export default function Project() {
  return (
    <div className="page">
      <h2 className="sectionName">PROJECT {} OVERVIEW</h2>
      <div className="projectPanels">
        <div className="metrics">
          <RoiPanel ROI={"2 years and 4 months"} />
          <EquilibriumPanel yearlyEq={26000} monthlyEq={180000} />
          <MonthlyFlowPanel />
          <YearlyFlowPanel />
        </div>
        <FixedCostPanel />
        <AssetsPannel />
        <UnitsEquilibriumPanel />
      </div>
    </div>
  );
}
