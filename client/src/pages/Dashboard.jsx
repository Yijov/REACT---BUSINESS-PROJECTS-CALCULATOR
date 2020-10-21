import React, { useEffect, useContext } from "react";
import banner from "../images/banner2.jpg";
import { CurrentProjectContext } from "../context/CurrentProjectContext";
export default function Dashboard() {
  const { updateState, resetLocalStorage } = useContext(CurrentProjectContext);

  const bannerBackgound = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
  };

  useEffect(() => {
    resetLocalStorage();
    updateState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page">
      <h2 className="sectionName">DASHBOARD</h2>
      <div className="dashboard" style={bannerBackgound}></div>
    </div>
  );
}
