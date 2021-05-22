import React from 'react';
import '../CSS/Card.css';
import '../CSS/Button.css';
import Button from './Button'
//import AdminService from '../Services/AdminService'
import ProductDetails from './ProductDetails'
import { withRouter, Redirect } from 'react-router-dom';

class Card extends React.Component{

  constructor(props){
    super(props);
    this.state={
      showDetails:false,

    }
  }

 

 


onSelect=()=>{
localStorage.setItem("pid",this.props.pid);
localStorage.setItem("pname", this.props.pname);
localStorage.setItem("price", this.props.price);
localStorage.setItem("brand", this.props.brand);
localStorage.setItem("colour", this.props.colour);
localStorage.setItem("size", this.props.size);
localStorage.setItem("category", this.props.title);
localStorage.setItem("bodyMaterial", this.props.bodyMaterial);
localStorage.setItem("stringMaterial", this.props.pname);
localStorage.setItem("stock", this.props.stock);
this.props.history.push("/ProductDetails");
this.setState({showDetails:true})
console.log(this.state.selectedPid);
}

 


render(){
  return(
    <>
{  !this.state.showDetails &&
    <article className="card">
        <picture className="thumbnail">
              <img className="category__01 imgs" src={`./images/${this.props.pname}${this.props.pid}.jpg`} alt="noimg"  />
        </picture>
        <div className="card-content">
          <p className="category category__01">₹ {this.props.price}</p>
          <p className="title_cat">{this.props.title}</p>
          <h2>{this.props.pname}</h2>

      </div>
          <Button type="button" className="btn btn-info"  key={this.props.pid}
              onClick={() => this.onSelect(this.props)}> See Details </Button>

          </article>
  }

{
                this.state.showDetails &&  <ProductDetails
                  title={this.props.title}
                  pname={this.props.pname} //productName is the coming from backend entity
                  price={this.props.price}
                  pid={this.props.pid} ///we can have pid from here
                  stock={this.props.stock}
                  brand={this.props.brand}
                  bodyMaterial={this.props.bodyMaterial}
                  stringMaterial={this.props.stringMaterial}
                  colour={this.props.colour}
                  size={this.props.size}

                />
}

 

</>
);


}

 

  }

  export default  withRouter (Card);