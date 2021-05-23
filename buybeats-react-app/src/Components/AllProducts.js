import React from 'react';
import Card from './Cards.js';
import '../CSS/Card.css'
import Service from '../Services/AdminService'
import '../CSS/Searchbar.css';
import Searchbar from './Searchbar.js';
import ProductList from './Product_list'
export default class AllProduct extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      prod_list : [],
      query:'',
      searched:false,
     status:''
    }


    }


    componentDidMount()
    {    //e.preventDefault ();
        console.log(this.state.prod_list);
        //let k=e.target.elements.keyword.value;

            Service.getProducts()
        .then(res => {
          console.log("HELLO"+res.data);
          console.log(res.data);
          console.log(res.data[0]);
           this.setState({ prod_list:res.data });
           console.log(this.state.prod_list);
           //this.setState({status:"found"});
          //  this.setState({status:"notFound"});
            //this.setState({ prod_list:[] });
          }
        )


    }

    render() {

      return (

        <>
          {<ProductList/>}




{
  <div>
      <div><h3> Our Best Products</h3></div>
        <div className="cards">
          { this.state.prod_list.map(prod => (


              <Card
                title={prod.category}
                pname={prod.productName} //productName is the coming from backend entity
                price={prod.price}
                pid={prod.pid} ///we can have pid from here
                stock={prod.stock}
                brand={prod.brand}
                bodyMaterial={prod.bodyMaterial}
                stringMaterial={prod.stringMaterial}
                colour={prod.colour}
                size={prod.size}
              />

          ))}
          </div>
        </div>
        }
        </>

      )
    }
  }
