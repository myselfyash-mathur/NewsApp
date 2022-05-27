import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import News from './components/News';
import SpecificNews from './components/SpecificNews';
import { useEffect, useState } from 'react';

function App() {

  const API_KEY = 'a97f89c951764c88add55ecfde3159b0';

  const [news, fetchNews] = useState([]);
  const getNews=()=>{
     axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`).then((res)=>{
     console.log(res.data.articles);
     fetchNews(...news,res.data.articles);
   })
 }
  
 useEffect(()=>{
      const getAllNews = async () =>{
        const allNews = await getNews();
        if(allNews) fetchNews(allNews);
      } 
      getAllNews();
  },[])
  return (
    <div>
      <Router>
        <Header fetchNews={fetchNews} news={news} API_KEY={API_KEY}></Header>
        <Routes>
          <Route path="/news" exact element={<News news={news} getNews={getNews}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
