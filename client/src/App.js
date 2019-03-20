import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/layouts/Navbar";
import Sidebar from "./Components/layouts/Sidebar";
import ContentArea from "./Components/layouts/ContentArea";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <ContentArea />
      </div>
    );
  }
}

export default App;
