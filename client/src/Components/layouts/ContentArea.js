import React, { Component } from "react";
import FilesorFolders from "../Folders/FilesorFolders";

export default class ContentArea extends Component {
  render() {
    return (
      <div>
        <div className="content-wrap">
          <div className="main">
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card" />
                    <div className="content all-icons">
                      <div className="row1">
                        <FilesorFolders />
                        {/* <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                          <div className="font-icon-detail">
                            <i className="fa fa-folder  fa-3x" aria-hidden="true" />
                            <input type="text" value="folder1" />
                          </div>
                        </div>
                       
                        
                        <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                          <div className="font-icon-detail">
                            <i className="fa fa-folder  fa-3x" aria-hidden="true" />
                            <input type="text" value="folder3" />
                          </div>
                        </div>
                        <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                          <div className="font-icon-detail">
                            <i className="fa fa-folder  fa-3x" aria-hidden="true" />
                            <input type="text" value="folder4" />
                          </div>
                        </div>
                        <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                          <div className="font-icon-detail">
                            <i className="fa fa-folder  fa-3x" aria-hidden="true" />
                            <input type="text" value="folder4" />
                          </div>
                        </div>
                        <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                          <div className="font-icon-detail">
                            <i className="fa fa-folder  fa-3x" aria-hidden="true" />
                            <input type="text" value="folder4" />
                          </div>
                        </div>
                        <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                          <div className="font-icon-detail">
                            <i className="fa fa-folder  fa-3x" aria-hidden="true" />
                            <input type="text" value="folder4" />
                          </div>
                        </div>
                        <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                          <div className="font-icon-detail">
                            <i className="fa fa-folder  fa-3x" aria-hidden="true" />
                            <input type="text" value="folder4" />
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
