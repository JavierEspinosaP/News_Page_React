import React, { Component } from "react";
import { userContext } from '../../../context/userContext';
import Button from '@mui/material/Button';
import Img from '../../../assets/home.jpg';

class Home extends Component {

  static contextType = userContext

  constructor(props) {
    super(props)
  
    this.username= React.createRef();
  
    this.state = {
      username:''
    }
  }

  sendName = (e) => {
    e.preventDefault()
    //CONSUMER
    const {login} = this.context //Consume contexto desde JS
    login(this.state.username); //enviar nombre de contexto a login
    //Vaciar input + state
    this.username.current.value=""
    this.setState({username:""})
  }

  handleChange = () => this.setState({ username: this.username.current.value})

  render() {
    return <div className="home">
    <form onSubmit={this.sendName}>
      <div id="loginContainer">
    <div id="loginForm">
      <label className="inputLabel" id="label" htmlFor="name">Introduce tu nombre</label>
      <input type="text" ref={this.username} onChange={this.handleChange} placeholder="Albertu Henriques"/>
      <Button type="submit" className="inputLabel">Enviar</Button>        
      </div>
      <div className="img-hover-zoom">
        <img id="home-img" src={Img} alt="" />  
        </div>  
          
      </div>
  

    </form>     
    </div>

  }
}

export default Home;
