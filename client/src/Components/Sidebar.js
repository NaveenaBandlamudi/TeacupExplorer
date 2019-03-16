import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav className="main-menu">
          <ul>
            <li>
              <a href="index.html">
                <i className="fa fa-home nav_icon" />
                <span className="nav-text">Dashboard</span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="/">
                <i className="fa fa-cogs" aria-hidden="true" />
                <span className="nav-text">UI Components</span>
                <i className="icon-angle-right" />
                <i className="icon-angle-down" />
              </a>
              <ul>
                <li>
                  <a className="subnav-text" href="buttons.html">
                    Buttons
                  </a>
                </li>
                <li>
                  <a className="subnav-text" href="grids.html">
                    Grids
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-subnav">
              <a href="/">
                <i className="fa fa-check-square-o nav_icon" />
                <span className="nav-text">Forms</span>
                <i className="icon-angle-right" />
                <i className="icon-angle-down" />
              </a>
              <ul>
                <li>
                  <a className="subnav-text" href="inputs.html">
                    Inputs
                  </a>
                </li>
                <li>
                  <a className="subnav-text" href="validation.html">
                    Form Validation
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-subnav">
              <a href="/">
                <i className="fa fa-file-text-o nav_icon" />
                <span className="nav-text">Pages</span>
                <i className="icon-angle-right" />
                <i className="icon-angle-down" />
              </a>
              <ul>
                <li>
                  <a className="subnav-text" href="gallery.html">
                    Image Gallery
                  </a>
                </li>
                <li>
                  <a className="subnav-text" href="calendar.html">
                    Calendar
                  </a>
                </li>
                <li>
                  <a className="subnav-text" href="signup.html">
                    Sign Up Page
                  </a>
                </li>
                <li>
                  <a className="subnav-text" href="login.html">
                    Login Page
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="charts.html">
                <i className="fa fa-bar-chart nav_icon" />
                <span className="nav-text">Charts</span>
              </a>
            </li>
            <li>
              <a href="typography.html">
                <i className="icon-font nav-icon" />
                <span className="nav-text">Typography</span>
              </a>
            </li>
            <li>
              <a href="tables.html">
                <i className="icon-table nav-icon" />
                <span className="nav-text">Tables</span>
              </a>
            </li>
            <li>
              <a href="maps.html">
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span className="nav-text">Maps</span>
              </a>
            </li>
            <li>
              <a href="error.html">
                <i className="fa fa-exclamation-triangle" aria-hidden="true" />
                <span className="nav-text">Error Page</span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="/">
                <i className="fa fa-list-ul" aria-hidden="true" />
                <span className="nav-text">Extras</span>
                <i className="icon-angle-right" />
                <i className="icon-angle-down" />
              </a>
              <ul>
                <li>
                  <a className="subnav-text" href="faq.html">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="subnav-text" href="blank.html">
                    Blank Page
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="logout">
            <li>
              <a href="login.html">
                <i className="icon-off nav-icon" />
                <span className="nav-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
