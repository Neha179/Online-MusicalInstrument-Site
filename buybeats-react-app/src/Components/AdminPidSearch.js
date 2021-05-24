import axios from "axios";
import React, { Component } from "react";
import { useHistory } from "react-router";
import AdminService from "../Services/AdminService";
import Button from "./Button.js"
import UpdateProduct from './UpdateProduct.js';
import '../CSS/PidSearch.css';


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
       className="searchinputId"
        style={{ width: "20%", height: "2rem" }}
        type="number"
        placeholder="Search By pid"
        name="keyword"
        required
      />
      <button className="searchbuttonId" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </div>
    </form>
    <br/><br />
    {(this.state.status=="notFound")&&<center><h4 style={{ color: 'red' }}>Wrong PID</h4></center>}
    
<center>
<table className="tableitemsAdminId">
  <tbody>
  {(this.state.status=="found"||this.state.status=="update")&&
  <tr>
    <td className="headerAdminId">PID </td>
    <td className="headerAdminId">NAME </td>
    <td className="headerAdminId">CATEGORY </td>
    <td className="headerAdminId">BRAND </td>
    <td className="headerAdminId">STOCK </td>
    <td className="headerAdminId">PRICE</td>
    <td className="headerAdminId">SIZE</td>
    <td className="headerAdminId">COLOUR</td>
    <td className="headerAdminId">BODY Material</td>
    <td className="headerAdminId">String Material</td>
    <td className="headerAdminId">Action</td>
    </tr>
    }
  {
    
      <tr>
      <td className='dataAdminId'>{this.state.pid}</td>
      <td className='dataAdminId'>{this.state.productName}</td>
      <td className='dataAdminId'>{this.state.category}</td>
      <td className='dataAdminId'>{this.state.brand}</td>
      <td className='dataAdminId'>{this.state.stock}</td>
      <td className='dataAdminId'>{this.state.price}</td>
      <td className='dataAdminId'>{this.state.size}</td>
      <td className='dataAdminId'>{this.state.colour}</td>
      <td className='dataAdminId'>{this.state.bodyMaterial}</td>
      <td className='dataAdminId'>{this.state.stringMaterial}</td>
      {(this.state.status=="found")&&<td className="dataAdminId"><Button onClick={() => this.updateProduct()} >Update</Button></td>}
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