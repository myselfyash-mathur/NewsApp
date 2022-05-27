import React from 'react';
function News(props){
    return(
        <div className='ui container'>
            <h2> Displaying News!</h2>
            <div className="ui inverted segment">
                {props.getNews()}

            </div>
        </div>
    );
}

export default News;