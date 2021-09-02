import React from "react";
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="link" className="brand-link">
          <img
            src="assets/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="assets/dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt=""
              />
            </div>
            <div className="info">
              <a href="link" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <NavLink exact to='/' className="nav-link" activeClassName="active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/photos' className="nav-link" activeClassName="active">
                  <i className="nav-icon far fa-images" />
                  <p>
                    Photos
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/products' className="nav-link" activeClassName="active">
                  <i className="nav-icon far fa-images" />
                  <p>
                    Products
                  </p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
