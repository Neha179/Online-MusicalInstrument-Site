import React from 'react';

function Searchbar(props){
    return(<React.StrictMode>
      
      <div className="container">
  <form onSubmit={props.onSearch}>
   <div className="search-box" >
      <input type="text" name="keyword" className="search-input" placeholder="Search.." required/>

      <button className="search-button" type="submit">
        <i className="fa fa-search"></i>
      </button>
   </div>
   </form>
</div>



   
            
       
       
  
     
    </React.StrictMode>
    );
  
  
  }

  export default Searchbar;