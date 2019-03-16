import React, { Component } from "react";
export default class Navbar extends Component {
  render() {
    return (
      <section className="wrapper scrollable">
        <section className="title-bar">
          <div className="logo">
            <a href="/">
              <img
                id="TeacupExplorerimage"
                src="images/TeacupExplorerlogo.png"
                alt=""
              />
            </a>
          </div>
          <div className="full-screen">
            <section className="full-top">
              <button id="toggle">
                <i className="fa fa-arrows-alt" aria-hidden="true" />
              </button>
            </section>
          </div>
          <div className="w3l_search">
            <form action="/" method="post">
              <input
                type="text"
                name="search"
                value="Search"
                onfocus="this.value = '';"
                onblur="if (this.value == '') {this.value = 'Search';}"
                required=""
              />
              <button className="btn btn-default" type="submit">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>
          <div className="header-right">
            <div className="profile_details_left">
              <div className="header-right-left">
                <ul className="nofitications-dropdown">
                  <li className="dropdown head-dpdn">
                    <a
                      href="/"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-envelope" />
                      <span className="badge">3</span>
                    </a>
                    <ul className="dropdown-menu anti-dropdown-menu w3l-msg">
                      <li>
                        <div className="notification_header">
                          <h3>You have 3 new messages</h3>
                        </div>
                      </li>
                      <li>
                        <a href="/">
                          <div className="user_img">
                            <img src="images/1.png" alt="" />
                          </div>
                          <div className="notification_desc">
                            <p>Lorem ipsum dolor amet</p>
                            <p>
                              <span>1 hour ago</span>
                            </p>
                          </div>
                          <div className="clearfix" />
                        </a>
                      </li>
                      <li className="odd">
                        <a href="/">
                          <div className="user_img">
                            <img src="images/2.png" alt="" />
                          </div>
                          <div className="notification_desc">
                            <p>Lorem ipsum dolor amet </p>
                            <p>
                              <span>1 hour ago</span>
                            </p>
                          </div>
                          <div className="clearfix" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <div className="user_img">
                            <img src="images/3.png" alt="" />
                          </div>
                          <div className="notification_desc">
                            <p>Lorem ipsum dolor amet </p>
                            <p>
                              <span>1 hour ago</span>
                            </p>
                          </div>
                          <div className="clearfix" />
                        </a>
                      </li>
                      <li>
                        <div className="notification_bottom">
                          <a href="/">See all messages</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown head-dpdn">
                    <a
                      href="/"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-bell" />
                      <span className="badge blue">3</span>
                    </a>
                    <ul className="dropdown-menu anti-dropdown-menu agile-notification">
                      <li>
                        <div className="notification_header">
                          <h3>You have 3 new notifications</h3>
                        </div>
                      </li>
                      <li>
                        <a href="/">
                          <div className="user_img">
                            <img src="images/2.png" alt="" />
                          </div>
                          <div className="notification_desc">
                            <p>Lorem ipsum dolor amet</p>
                            <p>
                              <span>1 hour ago</span>
                            </p>
                          </div>
                          <div className="clearfix" />
                        </a>
                      </li>
                      <li className="odd">
                        <a href="/">
                          <div className="user_img">
                            <img src="images/1.png" alt="" />
                          </div>
                          <div className="notification_desc">
                            <p>Lorem ipsum dolor amet </p>
                            <p>
                              <span>1 hour ago</span>
                            </p>
                          </div>
                          <div className="clearfix" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <div className="user_img">
                            <img src="images/3.png" alt="" />
                          </div>
                          <div className="notification_desc">
                            <p>Lorem ipsum dolor amet </p>
                            <p>
                              <span>1 hour ago</span>
                            </p>
                          </div>
                          <div className="clearfix" />
                        </a>
                      </li>
                      <li>
                        <div className="notification_bottom">
                          <a href="/">See all notifications</a>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <div className="clearfix"> </div>
                </ul>
              </div>
              <div className="profile_details">
                <ul>
                  <li className="dropdown profile_details_drop">
                    <a
                      href="/"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="profile_img">
                        <span className="prfil-img">
                          <i className="fa fa-user" aria-hidden="true" />
                        </span>
                        <div className="clearfix" />
                      </div>
                    </a>
                    <ul className="dropdown-menu drp-mnu">
                      <li>
                        {" "}
                        <a href="/">
                          <i className="fa fa-cog" /> Settings
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="/">
                          <i className="fa fa-user" /> Profile
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="/">
                          <i className="fa fa-sign-out" /> Logout
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </section>
        <div className="main-grid">
          <div className="social grid">
            <div className="grid-info">
              <div className="col-md-3 top-comment-grid">
                <div className="comments likes">
                  <div className="comments-icon">
                    <i className="fa fa-facebook" />
                  </div>
                  <div className="comments-info likes-info">
                    <h3>95K</h3>
                    <a href="/">Likes</a>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
