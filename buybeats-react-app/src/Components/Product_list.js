import React from 'react';
import Card from './Cards.js';
import '../CSS/Card.css'
import ProductSearchService from '../Services/ProductSearchService'
import '../CSS/Searchbar.css';
import Searchbar from './Searchbar.js';
export default class Product_list extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      prod_list : [],
      query:'',
      selected:false,
   status:''
    }

    localStorage.setItem("selected",this.state.selected);

    }

    searchProduct=(e)=>
    {    e.preventDefault ();
        console.log(this.state.prod_list);
        let k=e.target.elements.keyword.value;

            ProductSearchService.getProducts(k)
        .then(res => {
          console.log("HELLO"+res.data);
          console.log(res.data[0]);
          if(res.data!="Product not found") //coming from backend
          {
           this.setState({ prod_list:res.data });
           console.log(this.state.prod_list);
           this.setState({status:"found"});
          }

          else{
            this.setState({status:"notFound"});
            this.setState({ prod_list:[] });
          }
        })
this.setState({"selected":true})
localStorage.setItem("selected",this.state.selected);
    }

    render() {

      return (

        <>




           <Searchbar onSearch={this.searchProduct}/>




{(this.state.status=="notFound")&&<center><img  src="./images/NoProductFound.png"
  style={{width:"60%",marginTop:"60px"}}></img></center>}



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
        </>
      )
    }
  }
