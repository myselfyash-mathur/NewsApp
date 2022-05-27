import './App.css';
import axios from 'axios';
import Header from './components/Header';
import News from './components/News';
import { useEffect, useState } from 'react';

function App() {

  const API_KEY = '7c94c4bf82af4e18a0ba534482945782';

  const [news, fetchNews] = useState([]);

  useEffect(()=>{
      const getAllNews = async () =>{
        const allNews = await getNews();
        if(allNews) fetchNews(allNews);
      } 
      getAllNews();
  },[])
  const getNews= async()=>{
     await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`).then((res)=>{
      console.log(res.data);
      fetchNews(...news,res.data.articles);
    })
    return news.map((elem)=>
      <div className='ui card'>
        <div className='image'>
          <img src={elem.urlToImage}/>
        </div>
        <div className='content'>
          <div className='header'>
              {elem.title}
          </div>
          <div className='content'>
            <h4 className='ui sub header'>{elem.author}</h4>
            <h5 className='ui sub header'>{elem.publishedAt}</h5>
          </div> 
          <div className='content'>
              {elem.description}
          </div>
          <div className='extra content'>
            <span className='right floated'>
              {elem.source.id}
            </span>
            <span className='left floated'>
              {elem.source.name}
            </span>
          </div>
        </div>
      </div>
    )

  }

  
  return (
    <div className="">
      <Header></Header>
      <News news={news} getNews={getNews}></News>
    </div>
  );
}

export default App;
