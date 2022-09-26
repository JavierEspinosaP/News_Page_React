import React, { Component } from "react";
import apiKey from '../../../config/apiKey'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import { newsContext } from '../../../context/newsContext';


class ListNews extends Component {

  static contextType = newsContext

  constructor(props) {
    super(props);
    this.state = { 
      newsList: this.props.defaultList,
      pagination: [0,5],
      loading: false }
  }

  async componentDidMount() {
    this.setState({loading: true});
    let {news} = this.context
    const resp = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`);
    const data = await resp.json();
    news = [news]
    const totalNews = [...news,...data.results]
    const flatNews = totalNews.flat(totalNews.length)
    const sliceNews = flatNews.slice(1)
    this.setState({
      newsList: sliceNews
    })      
    this.setState({loading: false})
    }


  nextNews = () => {
    if (this.state.pagination[1]<39) {
      this.setState({pagination: [this.state.pagination[0]+5,this.state.pagination[1]+5]})
    }
  }

  previousNews = () => {
    if (this.state.pagination[0]>4) {
      this.setState({pagination: [this.state.pagination[0]-5,this.state.pagination[1]-5]})
    }
  }

  render() {
    return <div>
      <h1>Últimas noticias</h1>
      {this.state.loading?<div className="loader">Loading...</div>
      :<div>
      <section className="listNews">
      {this.state.newsList?this.state.newsList.slice(this.state.pagination[0], this.state.pagination[1]).map(news =>
          <Card data={news} key={uuidv4()} />):null}    
      </section>
      <div id="pagination">
      {this.state.pagination[0]<5?null:<Button onClick={this.previousNews} size="small">Previous</Button>}
      {this.state.pagination[1]>35?null:<Button onClick={this.nextNews} size="small">Next</Button>}         
      </div>

      </div>}
 

    </div>;
  }
}

export default ListNews;
