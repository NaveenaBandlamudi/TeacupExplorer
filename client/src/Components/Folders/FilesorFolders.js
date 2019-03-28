import React, { Component } from "react";
import filesOrfolders from "../FolderData/FolderDataObject.json";

export default class FilesorFolders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filesOrfolders: filesOrfolders.content,
      parent: null,
      nextId: 4
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.extractFiles = this.extractFiles.bind(this);
    this.addFolder = this.addFolder.bind(this);
  }

  handleChange(event) {
    console.log(event.value);
    this.setState({ value: event.target.value });
  }

  onSubmit(item) {
    //let { parent } = this.state;
    // Ensure a todo was actually entered before submitting
    if (item.length > 0) {
      this.addFolder(item || item.content);
      this.setState({ value: "" });
    }
  }

  addFolder(folderName) {
    // console.log("folder path is:", folderpath);
    let { filesOrfolders, nextId } = this.state;
    if (filesOrfolders && filesOrfolders.length > 0) {
      filesOrfolders.push({
        id: nextId,
        name: folderName,
        extension: null,
        content: []
      });
    } else {
      filesOrfolders.push({
        id: 1,
        name: folderName,
        extension: null,
        content: []
      });
    }

    this.setState({
      filesOrfolders: filesOrfolders,
      nextId: ++nextId
    });
  }
  extractFiles(item) {
    console.log(item);
    let { parent } = this.state;
    if (parent && parent.length > 0) {
      parent.push(item.name);
    } else {
      parent = [item.name];
    }
    console.log(this.state.parent);
    this.setState({ filesOrfolders: item.content, parent });
  }

  displayBackButton() {
    let { parent } = this.state;
    if (parent && parent.length > 0) {
      return (
        <button
          onClick={() => {
            this.clickBack();
          }}
        >
          Go Back
        </button>
      );
    } else {
      return "";
    }
  }

  clickBack() {
    let originalArray = [...filesOrfolders.content];
    let parentArr = [...this.state.parent];
    let count = 0;

    parentArr.forEach(item => {
      let foundItem = null;
      originalArray.forEach(arrItem => {
        if (arrItem.name === item) {
          foundItem = arrItem.content;
          return;
        }
      });
      if (parentArr.length - 1 > count) {
        originalArray = foundItem;
      }
      count++;
    });
    parentArr.pop();
    this.setState({ filesOrfolders: originalArray, parent: parentArr });
  }

  displayContainer() {
    let { filesOrfolders } = this.state;
    if (this.state.filesOrfolders) {
      return filesOrfolders.map((item, index) => (
        <div
          className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6"
          key={index}
        >
          <button
            className="folderButton"
            onClick={() => {
              this.extractFiles(item);
            }}
          >
            <i className="fa fa-folder  fa-3x" aria-hidden="true" />
          </button>
          <input
            className="fodlername"
            type="text"
            value={item.name}
            onChange={this.handleChange}
          />
        </div>
      ));
    } else {
      return "";
    }
  }

  gotoSelectedParent(parentitem) {
    console.log("parent item is", parentitem);

    this.setState({ filesOrfolders: parentitem.content });
  }

  displayPath() {
    let { parent } = this.state;
    if (parent && parent.length > 0) {
      return (
        <div className="pathdiv">
          {parent.map(parentitem => (
            <button
              className="folderpathbutton"
              onClick={() => {
                this.gotoSelectedParent(parentitem);
              }}
            >
              {parentitem}
            </button>
          ))}
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div>
        <div className="newfolderdiv">
          <input
            className="newfoldertext"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter New FolderName"
          />
          <button
            className="fa fa-plus btn btn-primary"
            onClick={() => this.onSubmit(this.state.value)}
          >
            NewFolder
          </button>
        </div>
        {this.displayPath()}
        <hr />
        {this.displayBackButton()}
        <hr />
        {this.displayContainer()}
      </div>
    );
  }
}
