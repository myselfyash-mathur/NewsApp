import './App.css';
import axios from 'axios';
import Header from './components/Header';
import News from './components/News';
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
  useEffect(()=>{
      const getAllNews = async () =>{
        const allNews = await getNews();
        if(allNews) fetchNews(allNews);
      } 
      getAllNews();
  },[])

  return (
    <div className="">
      <Header></Header>
      <News news={news} getNews={getNews}></News>
    </div>
  );
}

export default App;
