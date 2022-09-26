import React, { Component } from "react";
import { userContext } from '../../../context/userContext';
import Button from '@mui/material/Button';

class Head extends Component {
  render() {
    return <div className="head">
          <userContext.Consumer>
        {({logout,user})=> user?
          <span>Bienvenid@, {user}!! <Button id="logout" variant="contained" size="small" onClick={logout}>Logout</Button></span>
          :""}
        </userContext.Consumer>  
    </div>;
  }
}

export default Head;
