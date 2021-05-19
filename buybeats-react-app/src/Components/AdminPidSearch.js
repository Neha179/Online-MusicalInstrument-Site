import axios from "axios";
import React, { Component } from "react";
import { useHistory } from "react-router";
import AdminService from "../Services/AdminService";
import Button from "./Button.js"
import UpdateProduct from './UpdateProduct.js'


class AdminPidSearch extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            brand: "",
            category: "",
            colour: "",
            pid: "",
            size: "",
            productName: "",
            bodyMaterial:"",
            stock: '',
            stringMaterial:"",
            price:"",
            status:'',
            product: null,
            editProduct:false
    }
  }

  updateProduct = () => {
    this.setState({
     editProduct : true,
     status:"update"
    });
     
  }

  onCancelUpdate = () => {
    this.setState({
        editProduct:false
    })
}

  // history = useHistory();
  onUpdateProduct = (product) => {
    this.setState({
      editProduct:false
    })
    AdminService.updateProduct(product)
        .then(res => {console.log(res.data)
                       
            if(res.data!="Product not found") //coming from backend
          {
           this.setState(
               {pid:res.data.pid,
                productName:res.data.productName,
                category:res.data.category,
                stock:res.data.stock,
                brand:res.data.brand,
                size:res.data.size,
                price:res.data.price,
                colour:res.data.colour,
                bodyMaterial:res.data.bodyMaterial,
                stringMaterial:res.data.stringMaterial,
                product:res.data
            });
            console.log(this.state.product);
           this.setState({status:"found"});
          }
        });
    console.log("test");
    // this.props.history.push({pathname:"/adminHome"});
    }

  handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name] : value,
        
    });

}

   handleSearchChange = async (e) => {
    e.preventDefault ();
    const pid = e.target.keyword.value;
    AdminService.getProductByPid(pid)
        .then(res => {console.log(res.data)
                       
            if(res.data!="Product not found") //coming from backend
          {
           this.setState(
               { pid:res.data.pid,
                productName:res.data.productName,
                category:res.data.category,
                stock:res.data.stock,
                brand:res.data.brand,
                size:res.data.size,
                price:res.data.price,
                colour:res.data.colour,
                bodyMaterial:res.data.bodyMaterial,
                stringMaterial:res.data.stringMaterial,
                product:res.data
            });
            console.log(this.state.product);
           this.setState({status:"found"});
          }
          
          else{
            this.setState({status:"notFound"});
            this.setState({ bodyMaterial: "",
            brand: "",
            category: "",
            colour: "",
            pid: "",
            size: "",
            productName: "",
            bodyMaterial:"",
            stock: '',
            stringMaterial:"",
            price:"",
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
  {(this.state.status=="found"||this.state.status=="update")&&
  <tr>
    <td>PID </td>
    <td>NAME </td>
    <td>CATEGORY </td>
    <td>BRAND </td>
    <td>STOCK </td>
    <td>PRICE</td>
    <td>SIZE</td>
    <td>COLOUR</td>
    <td>BODY Material</td>
    <td>String Material</td>
    </tr>
    }
  {
    
      <tr>
      <td>{this.state.pid}</td>
      <td>{this.state.productName}</td>
      <td>{this.state.category}</td>
      <td>{this.state.brand}</td>
      <td>{this.state.stock}</td>
      <td>{this.state.price}</td>
      <td>{this.state.size}</td>
      <td>{this.state.colour}</td>
      <td>{this.state.bodyMaterial}</td>
      <td>{this.state.stringMaterial}</td>
      {(this.state.status=="found")&&<td><Button onClick={() => this.updateProduct()} >Update</Button></td>}
      </tr>
      
    
  }
  {
    (this.state.editProduct) && 

    <UpdateProduct onSubmit={this.onUpdateProduct} product={this.state.product} />
                
  }
  </tbody>
  </table>
  </center>
  </>

    );
  }

}

export default AdminPidSearch;