import React from "react";
import { Link } from "react-router-dom";

export default function nav() {
  return (
    <div>
      <nav className="main-menu">
        <ul>
          <li>
            <Link to="/">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/planer">
              <i className="fa fa-bar-chart-o fa-2x"></i>
              <span className="nav-text">New Project</span>
            </Link>
          </li>

          <li className="has-subnav">
            <Link to="/project">
              <i className="fa fa-folder-open fa-2x"></i>
              <span className="nav-text">Open Project</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-table fa-2x"></i>
              <span className="nav-text">Generate Budget</span>
            </Link>
          </li>

          <li className="has-subnav">
            <Link to="/">
              <i className="fa fa-list fa-2x"></i>
              <span className="nav-text">My projects list (On Dev)</span>
            </Link>
          </li>
        </ul>

        <ul className="logout">
          <li>
            <Link to="/about">
              <i className="fa fa-font fa-2x"></i>
              <span className="nav-text">About</span>
            </Link>
          </li>
          <li>
            <Link to="/instructions">
              <i className="fa fa-info fa-2x"></i>
              <span className="nav-text">Instructions</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/settings">
              <i className="fa fa-cogs fa-3x"></i>
              <span className="nav-text">Settings (On Dev)</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
