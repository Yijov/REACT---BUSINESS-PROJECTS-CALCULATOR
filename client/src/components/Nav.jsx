import React from "react";

export default function nav() {
  return (
    <div>
      <nav className="main-menu">
        <ul>
          <li>
            <i className="fa fa-home fa-2x"></i>
            <span className="nav-text">Dashboard</span>
          </li>
          <li>
            <i className="fa fa-bar-chart-o fa-2x"></i>
            <span className="nav-text">New Project (On Dev)</span>
          </li>

          <li className="has-subnav">
            <i className="fa fa-folder-open fa-2x"></i>
            <span className="nav-text">Open Project</span>
          </li>
          <li>
            <i className="fa fa-table fa-2x"></i>
            <span className="nav-text">Generate Budget</span>
          </li>

          <li className="has-subnav">
            <i className="fa fa-list fa-2x"></i>
            <span className="nav-text">My projects list (On Dev)</span>
          </li>

          <li className="has-subnav">
            <i className="fa fa-cogs fa-3x"></i>
            <span className="nav-text">Settings (On Dev)</span>
          </li>

          <li>
            <i className="fa fa-info fa-2x"></i>
            <span className="nav-text">Instructions (On Dev)</span>
          </li>
          <li>
            <i className="fa fa-font fa-2x"></i>
            <span className="nav-text">About (On Dev)</span>
          </li>
        </ul>

        <ul className="logout" id="close-Btn">
          <li>
            <i className="fa fa-power-off fa-2x"></i>
            <span className="nav-text">Cerrar</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
