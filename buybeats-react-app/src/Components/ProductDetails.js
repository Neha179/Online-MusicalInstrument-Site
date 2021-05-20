import React from  'react'
import AdminService from '../Services/AdminService'
import Button from './Button'
import '../CSS/ProductDetail.css'


export default class ProductDetails extends React.Component{


  render(){
    return(
      <>
      <article>
        <div className="split left">
           <img src={`./images/${localStorage.getItem("pname")}${localStorage.getItem("pid")}.jpg`} alt="noimg"/>
        </div>
        <div className="split right">
            <table>
              <tr>
                <th>Name</th>
              <th>{localStorage.getItem("pname")}</th>
              </tr>

              <tr>
                <td>Category</td>
                <td>{localStorage.getItem("category")}</td>
              </tr>

              <tr>
                <td>Price</td>
              <td>{localStorage.getItem("price")}</td>
              </tr>

              <tr>
                <td>Colour</td>
                <td>{localStorage.getItem("colour")}</td>
              </tr>
              <tr>
                <td>Body Material</td>
              <td>{localStorage.getItem("bodyMaterial")}</td>
              </tr>

              <tr>
                <td>String Material</td>
              <td>{localStorage.getItem("stringMaterial")}</td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td><input  type='number'/></td>
              </tr>
              <tr>
                <td><Button buttonStyle={"btn--green-solid"}>Cart</Button></td>
              <td><Button >Wish</Button></td>
              </tr>
            </table>
        </div>

      </article>
    </>
    );
  }
}
