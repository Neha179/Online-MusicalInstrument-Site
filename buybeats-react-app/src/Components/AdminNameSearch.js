import axios from "axios";
import React, { Component } from "react";
import AdminServices from "../Services/AdminService";
import Button from "../Components/Button.js";
import '../CSS/NameSearch.css';

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
                    className="searchInput"
                    style={{ width: "20%", height: "2rem" }}
                    type="text"
                    placeholder="Search By Name"
                    name="keyword"
                    required
                  />
                <button className="searchButton" type="submit">
                  <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
          <br/>


        {(this.state.status=="notFound")&&<center><h4 style={{ color: 'red' }}>Product not found</h4></center>}

        <center>
          <table className="tableitemsName">
            <tbody>
                {(this.state.status=="found")&&
                    <tr>
                      <td className="headerName">PID </td>
                      <td className="headerName">NAME </td>
                      <td className="headerName">CATEGORY </td>
                      <td className="headerName">BRAND </td>
                      <td className="headerName">STOCK </td>
                    </tr>
                  }
                {
                    this.state.products.map(
                      products =>
                        <tr>
                          <td className='dataName'>{products.pid}</td>
                          <td className='dataName'>{products.productName}</td>
                          <td className='dataName'>{products.category}</td>
                          <td className='dataName'>{products.brand}</td>
                          <td className='dataName'>{products.stock}</td>
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
