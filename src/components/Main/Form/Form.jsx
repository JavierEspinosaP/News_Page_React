import React, { Component } from "react";
import { newsContext } from '../../../context/newsContext';
import Swal from 'sweetalert2';
import FormImg from '../../../assets/form.jpg'
import Button from '@mui/material/Button';

class Form extends Component {

  static contextType = newsContext

  constructor(props) {
    super(props)
  
    this.image= React.createRef();
    this.title= React.createRef();
    this.desc= React.createRef();
    this.url= React.createRef();
  
    this.state = {
      image: "",
      title:"",
      desc:"",
      url:""}}

  sendNews = (e) => {
    e.preventDefault()
    //CONSUMER
    const multimedia = [{url:this.state.image}]
    const title = this.state.title
    const abstract = this.state.desc
    const url = this.state.url

    let data = {title,multimedia,abstract,url}
    let {addNew, news} = this.context //Consume contexto desde JS
    const totalNews = [news, data]
    let flatNews = totalNews.flat(totalNews.length)
    console.log(flatNews);
    addNew(flatNews); //enviar nombre de contexto a login
    data= {}
    //Vaciar input + state
    this.setState({image:"",title:"", desc:"", url:""})
    e.target.image.value= ""
    e.target.title.value= ""
    e.target.desc.value= ""
    e.target.url.value = ""
    Swal.fire({
      title: `New added!`,
      icon: 'success',
      confirmButtonText: 'Cool!'
    })
  }


handleChange = () => this.setState({ 
  image: this.image.current.value,
  title: this.title.current.value,
  desc: this.desc.current.value,
  url: this.url.current.value
})


  render() {
    return <section>
      {/* <h1>Crea tu propia noticia</h1> */}
      <div id="formContainer">
      <form id="form" onSubmit={this.sendNews} >
        <label htmlFor="img">Introduce la url de la imagen</label>
        <input className="inputForm" type="url" name="image" ref={this.image} onChange={this.handleChange}/>
        <label htmlFor="title">Introduce el título</label>
        <input className="inputForm" type="text" name="title" ref={this.title} onChange={this.handleChange}/>
        <label htmlFor="descripcion">Introduce la descripción</label>
        <textarea className="inputForm" type="text" name="desc" ref={this.desc} onChange={this.handleChange}/>
        <label htmlFor="url">Introduce el link a la noticia</label>
        <input className="inputForm" type="url" name="url" ref={this.url} onChange={this.handleChange}/>
        <Button type="submit" className="inputLabel">Enviar</Button> 
        
      </form>
      <div id="imgContainer">
      <img id="img" src={FormImg} alt="" />        
      </div>

      </div>

    </section>;
  }
}

export default Form;
