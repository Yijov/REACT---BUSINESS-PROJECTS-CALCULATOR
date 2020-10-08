//Modules
import React from "react";
import "./css/App.css";
//Pages and Components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Dashboard />
    </div>
  );
}

export default App;
