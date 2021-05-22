import React from 'react';
import '../CSS/Card.css';
import '../CSS/Button.css';
function Card(props){
  let state=props.pid;
    return(<React.StrictMode>
     
      
     
        
        


<article className="card">
<picture className="thumbnail">    
          <img className="category__01" src={`./images/${props.pname}${props.pid}}.jpg`} alt="noimg"  />
         </picture>
         <div className="card-content">
      <p className="category category__01">₹ {props.price}</p>
      <p className="title_cat">{props.title}</p>
      <h2>{props.pname}</h2>
      
      <h2>{props.pid}</h2>  {/**remove this, this for showing that pid coming from bcknd */}
      
   </div>
            
          
          <a href={props.link} target="_blank">
            <button type="button" className="btn btn-info"> See Details </button>
            </a>
           
         
        </article>
  
       
  
     
    </React.StrictMode>
    );
  
  
  }

  export default Card;