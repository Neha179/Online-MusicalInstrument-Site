import axios from "axios";
import React, { Component } from "react";
import { useHistory } from "react-router";
import AdminService from "../Services/AdminService";
import Button from "./Button.js"
import UpdateProduct from './UpdateProduct.js';
import '../CSS/ProductSearch.css';


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
    <div style={{ marginTop: "5em", textAlign: "center" }}>
      <input
       className="search-input"
        style={{ width: "20%", height: "2rem" }}
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
    <br/><br />
    {(this.state.status=="notFound")&&<center><h4 style={{ color: 'red' }}>Wrong PID</h4></center>}
    
<center>
<table className="tableitems">
  <tbody>
  {(this.state.status=="found"||this.state.status=="update")&&
  <tr>
    <td className="header">PID </td>
    <td className="header">NAME </td>
    <td className="header">CATEGORY </td>
    <td className="header">BRAND </td>
    <td className="header">STOCK </td>
    <td className="header">PRICE</td>
    <td className="header">SIZE</td>
    <td className="header">COLOUR</td>
    <td className="header">BODY Material</td>
    <td className="header">String Material</td>
    <td className="header">Action</td>
    </tr>
    }
  {
    
      <tr>
      <td className='data'>{this.state.pid}</td>
      <td className='data'>{this.state.productName}</td>
      <td className='data'>{this.state.category}</td>
      <td className='data'>{this.state.brand}</td>
      <td className='data'>{this.state.stock}</td>
      <td className='data'>{this.state.price}</td>
      <td className='data'>{this.state.size}</td>
      <td className='data'>{this.state.colour}</td>
      <td className='data'>{this.state.bodyMaterial}</td>
      <td className='data'>{this.state.stringMaterial}</td>
      {(this.state.status=="found")&&<td className="data"><Button onClick={() => this.updateProduct()} >Update</Button></td>}
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