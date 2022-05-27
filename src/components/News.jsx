import React from 'react';
import "../App.css";
import {Link} from 'react-router-dom';

function News(props){
    const {title,urlToImage,author,publishedAt,source,description} = props;
    const fetchAllNews= props.news.map((elem)=>
    <div className='ui grid' style={{display:"contents",color:"white"}}>
       <div className='four wide column'>
           <div class="card"> 
                <div className='ui cards'>
                <div className='content'>
                <div className='right floated mini ui image'>
                    <img src={elem.urlToImage}/>
                </div>
                
                    <div className='header' >
                      <a href={elem.url} target="_blank"> {elem.title} </a>
                    </div>
                    <div className='content'>
                    <h4 className='ui sub header' style={{color:'white'}}>{elem.author}</h4>
                    <h5 className='ui sub header' style={{color:'white'}}>{elem.publishedAt}</h5>
                    </div> 
                    <div className='summary'>
                        <div className='content' style={{color:"white"}}>
                            <h6>{elem.description}</h6>
                        </div>
                    </div>
                    <div className='extra content' style={{color:"white"}}>
                    <span className='right floated'>
                        {elem.source.id}
                    </span>
                    <span className='left floated'>
                        {elem.source.name}
                    </span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
    return(
        <div className='ui container'>
            <h2> Displaying News!</h2>
                <div className='ui inverted segment'>
                       {fetchAllNews}
                </div>
        </div>
    );
}

export default News;