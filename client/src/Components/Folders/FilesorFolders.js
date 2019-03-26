import React, { Component } from "react";

export default class FilesorFolders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filesOrfolders: [
        { id: 1, name: "a", date: "20/4", extension: null, content: null },
        { id: 2, name: "b", date: "20/4", extension: ".doc", content: null },
        {
          id: 3,
          name: "c",
          date: "20/4",
          extension: null,
          content: [
            {
              id: 1,
              name: "1",
              date: "20/4",
              extension: ".doc",
              content: null
            },
            {
              id: 2,
              name: "2",
              date: "20/4",
              extension: ".xml",
              content: null
            },
            {
              id: 3,
              name: "3",
              date: "20/4",
              extension: ".zip",
              content: null
            },
            {
              id: 4,
              name: "4",
              date: "20/4",
              extension: ".xlsx",
              content: [
                {
                  id: 1,
                  name: "apple",
                  date: "20/4",
                  extension: ".doc",
                  content: null
                },
                {
                  id: 2,
                  name: "Boy",
                  date: "20/4",
                  extension: ".xml",
                  content: null
                }
              ]
            }
          ]
        },
        {
          id: 4,
          name: "d",
          date: "20/4",
          extension: null,
          content: [
            {
              id: 1,
              name: "5",
              date: "20/4",
              extension: null,
              content: [
                {
                  id: 1,
                  name: "6",
                  date: "20/4",
                  extension: ".doc",
                  content: null
                },
                {
                  id: 2,
                  name: "7",
                  date: "20/4",
                  extension: ".xml",
                  content: null
                }
              ]
            }
          ]
        },
        { id: 5, name: "e", date: "20/4", extension: null, content: null }
      ]
    };

    this.extractFiles = this.extractFiles.bind(this);
  }

  handleChange(event) {
    // this.setState({

    // })
    console.log(event.value);
  }

  extractFiles(item) {
    console.log(item);
    // check if content is an array or not
    if (item.content && item.content.length > 0) {
      console.log("is array");
      this.setState({ filesOrfolders: item.content });
    } else {
      console.log("not an array");
    }
  }

  render() {
    let filesOrfolders = this.state.filesOrfolders;
    return (
      <div>
        {filesOrfolders.map((item, index) => (
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

            <input type="text" value={item.name} onChange={this.handleChange} />
          </div>
        ))}
      </div>
    );
  }
}
