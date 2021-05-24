import React from  'react'
import Button from './Button'
import '../CSS/ProductDetail.css'
import service from '../Services/ProductSearchService'
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import ReactNotifications from 'react-notifications-component';
import 'animate.css';


export default class ProductDetails extends React.Component{
    constructor(props){
      super(props);
      this.state={
      inputValue:1
      }
      this.addToCart=this.addToCart.bind(this);
    }

    updateInputValue =(quantity)=> {
        this.setState({
          inputValue: quantity
        });
}

    addToCart = () =>{
      let quant=this.state.inputValue
      service.addToCart(localStorage.getItem("pid"),{"quantity":quant});
      //calling notifications
      store.addNotification({
      title: ' ',   //dont remove this as the library req it
      message: 'Added to cart', //the message to do be displayed on notification
      type:'success',  //color of the notification you can only have values like 'default', 'success', 'info', 'warning'
      container: 'top-left',                // where to position the notifications
      animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied

      dismiss: {
        duration: 3000
      }
    })
    }
  render(){
    return(
      <>
      <article>
        <div className="splitDetail leftDetail ">
           <img className="imgset" src={`./images/${localStorage.getItem("pname")}${localStorage.getItem("pid")}.jpg`} alt="noimg"/>
        </div>
        <div className="splitDetail rightDetail ">
          <span className="centeredDetail">
            <table className="tableitems">
              <tr>
                <th className="datas">Name  :</th>
              <th className="data">{localStorage.getItem("pname")}</th>
              </tr>

              <tr>
                <td className="datas">Category  :</td>
                <td className="data">{localStorage.getItem("category")}</td>
              </tr>

              <tr>
                <td className="datas">Price  :</td>
              <td className="data">{localStorage.getItem("price")}</td>
              </tr>

              <tr>
                <td className="datas">Colour  :</td>
                <td className="data">{localStorage.getItem("colour")}</td>
              </tr>
              <tr>
                <td className="datas">Body Material  :</td>
              <td className="data">{localStorage.getItem("bodyMaterial")}</td>
              </tr>

              <tr>
                <td className="datas">String Material  :</td>
              <td className="data">{localStorage.getItem("stringMaterial")}</td>
              </tr>
              <tr>
                <td className="datas">Quantity  :</td>
              <td className="data"><input name="inputValue"  className="inputbar" min="1" id="quantity" type='number'
                value={this.state.inputValue}  onChange={(event)=>{this.updateInputValue(event.target.value)}}
                /></td>
              </tr>
              <br />
              <tr>
                <td className="productCartButton" colSpan="2"><Button buttonStyle={"btn--green--solid"} onClick={()=>this.addToCart()}> Cart</Button></td>
              </tr>
            </table>
          </span>
           <div>    <ReactNotifications/>    </div>
        </div>

      </article>
    </>
    );
  }
}