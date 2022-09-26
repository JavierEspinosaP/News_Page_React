import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { userContext } from './context/userContext';
import { newsContext } from './context/newsContext';
import '../src/styles/styles.scss';

function App() {

  const [user, setUser] = useState("Usuario");
  const [news, setNews] = useState({})

  const login = (name) => setUser(name);
  const logout = () => setUser("");


  const addNew = (data) => setNews(data)

  const data = {
    user, login, logout
  }

  const dataNews = {
    news, addNew
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
