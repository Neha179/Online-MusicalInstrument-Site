import React from 'react';
import '../CSS/Card.css';
import '../CSS/Button.css';
import Button from './Button'
//import AdminService from '../Services/AdminService'
import ProductDetails from './ProductDetails'
import { withRouter, Redirect } from 'react-router-dom';
import service from '../Services/ProductSearchService'

class ViewCart extends React.Component{

  constructor(props){
    super(props);
    this.state={
      showDetails:false,

    }
  }







onSelect=()=>{
  console.log("button selected")
  localStorage.setItem("entryid",this.props.entryID);
  localStorage.setItem("quantity",this.props.quantity)
  localStorage.setItem("cpid",this.props.pid);
  localStorage.setItem("cpname", this.props.pname);
  localStorage.setItem("cprice", this.props.price);
  localStorage.setItem("cbrand", this.props.brand);
  localStorage.setItem("ccolour", this.props.colour);
  localStorage.setItem("csize", this.props.size);
  localStorage.setItem("ccategory", this.props.title);
  localStorage.setItem("cbodyMaterial", this.props.bodyMaterial);
  localStorage.setItem("cstringMaterial", this.props.pname);
  localStorage.setItem("cstock", this.props.stock);
  console.log(localStorage.getItem("cpid"));
  console.log(localStorage.getItem("quantity"));
  console.log(localStorage.getItem("entryid"));
  this.props.history.push("/cartdetails");
//this.setState({showDetails:true})
//console.log(this.state.selectedPid);
}


onRemove = () =>{
  console.log("entered remove function")
  console.log(this.props.entryID)
  service.removeFromCart(this.props.entryID)
  .then((response)=>{
      console.log("response here")
      console.log(response)
      this.props.history.push("/cart");
  }).catch(error=>{
    console.log(error)
    console.log("error came")
    //console.log(error.response.status)
  })

  console.log("service callled")

  //window.location.reload(false);
  //this.props.history.push("/");
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
            <br/>
              <Button    key={this.props.pid}
                  onClick={() => this.onSelect(this.props)}> Details </Button>
          </article>







</>
);


}



  }

  export default  withRouter (ViewCart);
