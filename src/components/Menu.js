import React, { Component } from 'react'

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
                        <a href="/products" className="nav-link" ><i className="fas fa-circle nav-icon" /><p>Products</p></a>
                      </li>
                      <li className="nav-item">
                        <a href="/indications" className="nav-link"><i className="fas fa-circle nav-icon" /><p>Indication</p></a>
                      </li>
                      <li className="nav-item">
                        <a href="/therapeutics" className="nav-link"><i className="fas fa-circle nav-icon" /><p>Therapeutic</p></a>
                      </li>
                      {/* <li className="nav-item has-treeview">
                        <a href="#" className="nav-link">
                          <i className="nav-icon fas fa-circle" /><p>Products <i className="right fas fa-angle-left" /></p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <a href="/" className="nav-link"><i className="far fa-circle nav-icon" /><p>Product Add</p>
                            </a>
                          </li>
                          <li className="nav-item has-treeview"><a href="#" className="nav-link">  <i className="far fa-circle nav-icon" />  <p>  Product List    <i className="right fas fa-angle-left" />  </p>
                            </a>
                            </li>
                        </ul>
                      </li> */}
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
