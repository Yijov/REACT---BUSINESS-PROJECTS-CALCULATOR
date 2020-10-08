import React from "react";

export default function nav() {
  return (
    <div>
      <nav class="main-menu">
        <ul>
          <li>
            <a href="index.html">
              <i class="fa fa-home fa-2x"></i>
              <span class="nav-text">Home</span>
            </a>
          </li>

          <li class="has-subnav">
            <a href="project.html">
              <i class="fa fa-folder-open fa-2x"></i>
              <span class="nav-text">Abrir Proyecto</span>
            </a>
          </li>

          <li>
            <a href="planer.html">
              <i class="fa fa-table fa-2x"></i>
              <span class="nav-text">Nuevo Proyecto</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="fa fa-bar-chart-o fa-2x"></i>
              <span class="nav-text">Graficos (On Dev)</span>
            </a>
          </li>

          <li class="has-subnav">
            <a href="#">
              <i class="fa fa-list fa-2x"></i>
              <span class="nav-text">Generar Plan (On Dev)</span>
            </a>
          </li>

          <li class="has-subnav">
            <a href="#">
              <i class="fa fa-cogs fa-3x"></i>
              <span class="nav-text">Config (On Development)</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="fa fa-font fa-2x"></i>
              <span class="nav-text">About (On Dev)</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="fa fa-info fa-2x"></i>
              <span class="nav-text">Instrucciones (On Dev)</span>
            </a>
          </li>
        </ul>

        <ul class="logout" id="close-Btn">
          <li>
            <a href="#">
              <i class="fa fa-power-off fa-2x"></i>
              <span class="nav-text">Cerrar</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
