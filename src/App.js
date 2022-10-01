import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { userContext } from './context/userContext';
import { newsContext } from './context/newsContext';
import '../src/styles/styles.scss';
// import apiKey from '../src/config/apiKey'

function App() {

  const [user, setUser] = useState("Usuario");
  let [news, setNews] = useState([])

  useEffect(() => {
    async function fetchNews(){
      try {
    const resp = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_APIKEY}`);
    const data = await resp.json();
    // news = [news]
    const totalNews = [...news,...data.results]
    const flatNews = totalNews.flat(totalNews.length)
    const sliceNews = flatNews.slice(1)
    setNews(sliceNews)        
      }
      catch(e){
        console.log(e);
      }

    }

fetchNews()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  const login = (name) => setUser(name);
  const logout = () => setUser("");


  const addNew = (data) => setNews(data)

  const data = {
    user, login, logout
  }

  const dataNews = {
    news, addNew, setNews
  }

  return (
    <div className="App">
      <BrowserRouter>
<userContext.Provider value={data}>
      <Header/>
<newsContext.Provider value={dataNews}>
      <Main/>
</newsContext.Provider>
</userContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
