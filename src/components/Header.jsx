import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Header(props){

    const [category, setCategory] = useState("");
    const [categNews, setCategNews] = useState([]);
    const searchByCategory=(category)=>{
        axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=${props.API_KEY}`).then((res)=>{
          console.log(res.data.articles);
          props.fetchNews(...categNews,res.data.articles);
        })
       }  
    
  useEffect(()=>{
    const getCategoryNews = async () =>{
      const allNews = await searchByCategory(category);
      if(allNews) setCategNews(allNews);
    } 
    getCategoryNews();
  },[])

    
    return(
        <div className='header'>
            <h1>NewsApp business</h1>
            <div className="ui category search">
                <div className="ui icon input">
                    <input className="prompt" name="search" type="text" placeholder="Search News..." value={category} onChange={(e)=>setCategory(e.target.value)}/>
                    <button onClick={searchByCategory(category)}><i class="search icon" ></i></button>
                </div>
                </div>
        </div>
    );
}

export default Header;