import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <div className="nav-bar">
      <Link className="nav-link" to='/'>Home</Link>
      <Link className="nav-link" to='/form'>Formulario de noticias</Link>
      <Link className="nav-link" to='/list'>Lista de Noticias</Link>
    </div>;
  }
}

export default Nav;
