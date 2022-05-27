import React, { useState } from 'react';
function Header(props){

    const [category, setCategory] = useState();
    return(
        <div className='header'>
            <h1>NewsApp</h1>
            <div className="ui category search">
                <div className="ui icon input">
                    <input className="prompt" name="search" type="text" placeholder="Search News..." value={category} onChange={(e)=>setCategory(category=e.target.value)}/>
                    <i class="search icon" onClick={props.searchByCategory(category)}></i>
                </div>
                </div>
        </div>
    );
}

export default Header;