import React from "react";

export default function nav() {
  return (
    <div>
      <nav class="main-menu">
        <ul>
          <li>
            <i class="fa fa-home fa-2x"></i>
            <span class="nav-text">Home</span>
          </li>

          <li class="has-subnav">
            <i class="fa fa-folder-open fa-2x"></i>
            <span class="nav-text">Abrir Proyecto</span>
          </li>

          <li>
            <i class="fa fa-table fa-2x"></i>
            <span class="nav-text">Nuevo Proyecto</span>
          </li>

          <li>
            <i class="fa fa-bar-chart-o fa-2x"></i>
            <span class="nav-text">Graficos (On Dev)</span>
          </li>

          <li class="has-subnav">
            <i class="fa fa-list fa-2x"></i>
            <span class="nav-text">Generar Plan (On Dev)</span>
          </li>

          <li class="has-subnav">
            <i class="fa fa-cogs fa-3x"></i>
            <span class="nav-text">Config (On Dev)</span>
          </li>

          <li>
            <i class="fa fa-font fa-2x"></i>
            <span class="nav-text">About (On Dev)</span>
          </li>

          <li>
            <i class="fa fa-info fa-2x"></i>
            <span class="nav-text">Instrucciones (On Dev)</span>
          </li>
        </ul>

        <ul class="logout" id="close-Btn">
          <li>
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text">Cerrar</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
