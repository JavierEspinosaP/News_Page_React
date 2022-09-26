import React, { Component } from "react";
import {Route, Routes} from 'react-router-dom'
import Form from './Form'
import Home from './Home'
import ListNews from './ListNews'

class Main extends Component {
  render() {
    return <main id="main">
      <Routes>
        <Route element={<Home/>} path={"/"}/>
        <Route element={<ListNews/>} path={"/list"}/>
        <Route element={<Form/>} path={"/form"}/>
      </Routes>
    </main>;
  }
}

export default Main;
