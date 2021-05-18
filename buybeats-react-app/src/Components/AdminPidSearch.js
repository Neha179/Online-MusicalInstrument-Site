import axios from "axios";
import React, { Component } from "react";
import AdminServices from "../Services/AdminService";
import Button from "./Button.js"

class AdminPidSearch extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            
            brand: "",
            category: "",
            
            pid: "",
            
            productName: "",
            
            stock: '',
            
          status:''
    }
}

   handleSearchChange = async (e) => {
    e.preventDefault ();
    const pid = e.target.keyword.value;
    AdminServices.getProductByPid(pid)
        .then(res => {console.log(res.data)
                       
            if(res.data!="Product not found") //coming from backend
          {
           this.setState(
               { pid:res.data.pid,
                productName:res.data.productName,
                category:res.data.category,
                stock:res.data.stock,
                brand:res.data.brand
            });
           this.setState({status:"found"});
          }
          
          else{
            this.setState({status:"notFound"});
            this.setState({ bodyMaterial: "",
            brand: "",
            category: "",
            
            pid: "",
           
            productName: "",
            
            stock: '',
             });
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
        type="number"
        placeholder="Search By pid"
        name="keyword"
        required
      />
      <button className="search-button" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </div>
    </form>
    <br/>
    {(this.state.status=="notFound")&&<center><h4>Wrong PID</h4></center>}
    
<center>
<table>
<tbody>
{(this.state.status=="found")&&
<tr><td>PID </td><td>NAME </td><td>CATEGORY </td><td>BRAND </td><td>STOCK </td></tr>
  }
{
   
    <tr>
    <td>{this.state.pid}</td>
    <td>{this.state.productName}</td>
    <td>{this.state.category}</td>
    <td>{this.state.brand}</td>
    <td>{this.state.stock}</td>
    {(this.state.status=="found")&&<td><Button >update</Button></td>}
    </tr>
  
}
</tbody>
</table>
</center>
</>

  );
}
}

export default AdminPidSearch;