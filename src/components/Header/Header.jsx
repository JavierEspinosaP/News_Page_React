import React, { Component } from "react";
import Head from "./Head";
import Nav from "./Nav"

class Header extends Component {
  render() {
    return <div className="header">
      <Nav/>
      <Head/>
    </div>;
  }
}

export default Header;
