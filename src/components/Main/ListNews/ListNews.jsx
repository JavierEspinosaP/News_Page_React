import React, { Component } from "react";
import Card from './Card'
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import { newsContext } from '../../../context/newsContext';





class ListNews extends Component {

  static contextType = newsContext

  constructor(props) {
    
    super(props);
    this.state = {
      newsList: [],
      pagination: [0, 5],
      loading: false
    }
  }
  
  async componentDidMount() {
    this.setState({ loading: true });    
    setTimeout(() => {
    let totalNews = []

    let {news} =  this.context
    totalNews = news.flat(news.length)

  
    this.setState({newsList: totalNews})


    this.setState({ loading: false })        
    }, 500);
    


  }


  nextNews = () => {
    if (this.state.pagination[1] < (this.state.newsList.length)) {
      this.setState({page: this.state.page+1})
      this.setState({ pagination: [this.state.pagination[0] + 5, this.state.pagination[1] + 5] })
    }
  }

  previousNews = () => {
    if (this.state.pagination[0] > 4) {
      this.setState({page: this.state.page-1})
      this.setState({ pagination: [this.state.pagination[0] - 5, this.state.pagination[1] - 5] })
    }
  }

  deleteNew = (i) => {
    let { news, setNews } = this.context
    const remainingNews = news.filter((newss, j) => i !== j)
    let flatNews = remainingNews.flat(remainingNews.length)
    setNews(flatNews)
    this.setState({ newsList: flatNews })
  }

  render() {
    return <div>
      <h1>Últimas noticias</h1>
      {this.state.loading ? <div className="loader">Loading...</div>
        : <div>
          <section className="listNews">
            {this.state.newsList ? this.state.newsList.slice(this.state.pagination[0], this.state.pagination[1]).map((news, i) =>
              <Card data={news} key={uuidv4()} delete={() => this.deleteNew(this.state.pagination[0] + i)} />) : null}
          </section>
          <div id="pagination">
            {this.state.pagination[0] < 5 ? null : <Button onClick={this.previousNews} size="small">Previous</Button>}
            {this.state.pagination[1] > this.state.newsList.length ? null : <Button onClick={this.nextNews} size="small">Next</Button>}
          </div>

        </div>}


    </div>;
  }
}

export default ListNews;
