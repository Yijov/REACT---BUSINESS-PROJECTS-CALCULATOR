import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <div className="logo-icon">[LOGO]</div>
          <h1 className="logo-name">APP NAME</h1>
        </div>
      </Link>
      <div className="configIcons">
        <span>G</span>
        <span>D</span>
        <span>A</span>
      </div>
    </header>
  );
}
