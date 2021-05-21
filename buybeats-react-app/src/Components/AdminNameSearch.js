import axios from "axios";
import React, { Component } from "react";
import AdminServices from "../Services/AdminService";
import Button from "../Components/Button.js";
import '../CSS/ProductSearch.css';

let products=[];
class AdminNameSearch extends Component {
    constructor(props){
        super(props)
        this.state ={
          products : [],
          status:''
    }
}

   handleSearchChange = async (e) => {
    e.preventDefault ();
    const searchTerm = e.target.keyword.value;
    AdminServices.getProductsByName(searchTerm)
        .then(res => {console.log(res.data)
            if(res.data!="Product not found") //coming from backend
          {
           this.setState({ products:res.data });
           this.setState({status:"found"});
          }
          
          else{
            this.setState({status:"notFound"});
            this.setState({ products:[] });
          }
        
    });
   
   
    
  }
  render(){
  return (
      <>
      
    <form onSubmit={this.handleSearchChange}>
    <div style={{ marginTop: "5em", textAlign: "center" }}>
      <input 
        className="search-input"
        style={{ width: "20%", height: "2rem" }}
        type="text"
        placeholder="Search By Name"
        name="keyword"
        required
      />
      <button className="search-button" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </div>
    </form>
    <br/>
    {(this.state.status=="notFound")&&<center><h4 style={{ color: 'red' }}>Product not found</h4></center>}
    
<center>
<table className="tableitems">
<tbody>
{(this.state.status=="found")&&
<tr><td className="header">PID </td>
    <td className="header">NAME </td>
    <td className="header">CATEGORY </td>
    <td className="header">BRAND </td>
    <td className="header">STOCK </td>
</tr>
  }
{
   this.state.products.map(
    products =>
    <tr>
    <td className='data'>{products.pid}</td>
    <td className='data'>{products.productName}</td>
    <td className='data'>{products.category}</td>
    <td className='data'>{products.brand}</td>
    <td className='data'>{products.stock}</td>
    </tr>
  )
}
</tbody>
</table>
</center>
</>

  );
}
}

export default AdminNameSearch;