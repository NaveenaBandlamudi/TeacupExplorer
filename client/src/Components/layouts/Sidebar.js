import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav className="main-menu">
          <ul>
            <li>
              <a href="/">
                <i className="fa fa-plus" />
                <span className="nav-text">New</span>
                <i className="icon-angle-right" />
                <i className="icon-angle-down" />
                <ul>
                  <li>
                    <a className="subnav-text" href="/">
                      Folder
                    </a>
                  </li>
                  <li>
                    <a className="subnav-text" href="/">
                      File
                    </a>
                  </li>
                </ul>
              </a>
            </li>
            <li>
              <a href="index.html">
                <i className="fa fa-home nav_icon" />
                <span className="nav-text">Dashboard</span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="/">
                <i className="fa fa-cogs" aria-hidden="true" />
                <span className="nav-text">Recent Folders</span>
                <i className="icon-angle-right" />
                <i className="icon-angle-down" />
              </a>
            </li>
            <li className="has-subnav">
              <a href="/">
                <i className="fa fa-check-square-o nav_icon" />
                <span className="nav-text">Important Folders</span>
                <i className="icon-angle-right" />
                <i className="icon-angle-down" />
              </a>
            </li>
            <li className="has-subnav">
              <a href="/">
                <i className="fa fa-file-text-o nav_icon" />
                <span className="nav-text">Trash</span>
                <i className="icon-angle-right" />
                <i className="icon-angle-down" />
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
