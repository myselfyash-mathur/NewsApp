import React from 'react';
function News(props){

    const fetchAllNews= props.news.map((elem)=>
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
        <div className='summary'>
            <div className='content'>
                <h6>{elem.description}</h6>
            </div>
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
    return(
        <div className='ui container'>
            <h2> Displaying News!</h2>
            <div className="ui inverted segment">
                {fetchAllNews}
            </div>
        </div>
    );
}

export default News;