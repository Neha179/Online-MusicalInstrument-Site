import React from 'react';
import '../CSS/Searchbar.css';

function Searchbar(props){
    return(<React.StrictMode>
      
      <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
  <form onSubmit={props.onSearch}>
   <div className="searchbox" >
      <input type="text" name="keyword" className="searchinput" placeholder="Search....." required/>

      <button className="searchbutton" type="submit">
        <i className="fa fa-search"></i>
      </button>
   </div>
   </form>
</div>



   
            
       
       
  
     
    </React.StrictMode>
    );
  
  
  }

  export default Searchbar;