//Modules
import React from "react";
import "./css/App.css";
//Pages and Components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./pages/Project";
// import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Project />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
