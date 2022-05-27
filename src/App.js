import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import News from './components/News';
import SpecificNews from './components/SpecificNews';
import { useEffect, useState } from 'react';

function App() {

  const API_KEY = '7c94c4bf82af4e18a0ba534482945782';

  const [news, fetchNews] = useState([]);
  const getNews=()=>{
     axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`).then((res)=>{
     console.log(res.data.articles);
     fetchNews(...news,res.data.articles);
   })
 }
 const searchByCategory=(category)=>{
  axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`).then((res)=>{
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
  useEffect(()=>{
    const getCategoryNews =() =>{
      const allNews =  searchByCategory();
      if(allNews) fetchNews(allNews);
    } 
  },[])

  return (
    <div>
      <Router>
        <Header searchByCategory={searchByCategory}></Header>
        <Routes>
          <Route path="/news" exact element={<News news={news} getNews={getNews}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
