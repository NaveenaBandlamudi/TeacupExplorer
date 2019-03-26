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
