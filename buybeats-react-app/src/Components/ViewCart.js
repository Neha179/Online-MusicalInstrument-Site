import React from 'react';
import '../CSS/Card.css';
import '../CSS/Button.css';
import Button from './Button'
//import AdminService from '../Services/AdminService'
import ProductDetails from './ProductDetails'
import { withRouter, Redirect } from 'react-router-dom';

class ViewCart extends React.Component{

  constructor(props){
    super(props);
    this.state={
      showDetails:false,

    }
  }

 

 


onSelect=()=>{



this.setState({showDetails:true})
console.log(this.state.selectedPid);
}

 


render(){
  return(
    <>

    <article className="card">
        <picture className="thumbnail">
              <img className="category__01" src={`./images/${this.props.pname}${this.props.pid}.jpg`} alt="noimg"  />
        </picture>
        <div className="card-content">
          <p className="category category__01">₹ {this.props.price}</p>
          <p className="title_cat">{this.props.title}</p>
          <h2>{this.props.pname}</h2>

      </div>
          <Button type="button" buttonStyle={"btn--danger--solid"}  key={this.props.pid}
              onClick={() => this.onSelect(this.props)}> Remove </Button>

          </article>
  

  


 

</>
);


}

 

  }

  export default  withRouter (ViewCart);