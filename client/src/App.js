//Modules
import React from "react";
import "./css/App.css";
//Pages and Components
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
