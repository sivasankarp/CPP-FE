import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";

export default class Menu extends Component {

    render() {
        return (
            <div>
              <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="#" className="brand-link">
                  <span className="brand-text font-weight-light">CPP App</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                  {/* Sidebar product panel (optional) */}
                  {/* Sidebar Menu */}
                  <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                      {/* Add icons to the links using the .nav-icon class
                      with font-awesome or any other icon font library */}
                      <li className="nav-item">
                      <Link className="nav-link" to="/products">Products</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/indications">Products</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/therapeutics">Products</Link>
                      </li>
                    </ul>
                  </nav>
                  {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
              </aside>
            </div>
        )
    }
}
