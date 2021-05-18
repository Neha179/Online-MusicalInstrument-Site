import axios from "axios";
import React, { Component } from "react";
import AdminServices from "../Services/AdminService";
import Button from "../Components/Button.js"
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
    <div style={{ marginTop: "3em", textAlign: "center" }}>
      <input
        style={{ width: "20%", height: "1rem" }}
        type="text"
        placeholder="Search By name"
        name="keyword"
        required
      />
      <button className="search-button" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </div>
    </form>
    <br/>
    {(this.state.status=="notFound")&&<center><h4>Product not found</h4></center>}
    
<center>
<table>
<tbody>
{(this.state.status=="found")&&
<tr><td>PID </td><td>NAME </td><td>CATEGORY </td><td>BRAND </td><td>STOCK </td></tr>
  }
{
   this.state.products.map(
    products =>
    <tr>
    <td>{products.pid}</td>
    <td>{products.productName}</td>
    <td>{products.category}</td>
    <td>{products.brand}</td>
    <td>{products.stock}</td>
    <td><Button >update</Button></td>
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