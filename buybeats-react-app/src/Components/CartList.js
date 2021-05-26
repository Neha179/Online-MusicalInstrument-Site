//Authors :Aakansha and Darshan

import React from 'react';
import Card from './Cards.js';
import '../CSS/Card.css'
import ProductSearchService from '../Services/ProductSearchService'
import ViewCart from './ViewCart.js';
import Button from './Button.js'
import { withRouter } from 'react-router-dom'
class CartList extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      cart : [],
      error:'',

   stat:''
    }


    }


    componentDidMount()
    {

            ProductSearchService.viewCart()
        .then((res) => {
          console.log("HELLO"+res.data);
          console.log(res.data);
          if(res.data!="Cart is Empty") //coming from backend
          {
           this.setState({ cart:res.data });
           console.log(this.state.prod_list);
           this.setState({stat:"found"});
          }

          else{
            this.setState({stat:"notFound"});
            this.setState({ cart:[] });
          }




        })


    }


    render() {

      return (

        <>
        {(this.state.stat=="notFound")&&<center><img  src="./images/NoProductFound.png" style={{width:"60%",marginTop:"60px"}} alt="NoImage"></img></center>}

    <div className="cards">

          { this.state.cart.map(prod => (
                <div>

              <ViewCart
                entryID={prod.entryID}
                title={prod.product.category}
                pname={prod.product.productName} //productName is the coming from backend entity
                price={prod.product.price}
                pid={prod.product.pid} ///we can have pid from here
                stock={prod.product.stock}
                brand={prod.product.brand}
                bodyMaterial={prod.product.bodyMaterial}
                stringMaterial={prod.product.stringMaterial}
                colour={prod.product.colour}
                size={prod.product.size}
                quantity={prod.quantity}


              />


              </div>

          ))

          }
          </div>
          <br/><br/>
          <center>
          {(this.state.stat=="found")&&
            <Button onClick={()=>{this.props.history.push("/viewAddress")}}>Place Order</Button>
          }
        </center>
        </>
      )
    }

  }

  export  default withRouter (CartList)
