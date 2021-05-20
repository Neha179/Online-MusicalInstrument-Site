import React from  'react'
import AdminService from '../Services/AdminService'
import Button from './Button'
import '../CSS/ProductDetail.css'


export default class ProductDetails extends React.Component{
    constructor(props){
      super(props);
      this.state={
        inputVal:1
      }
    }
  render(){
    return(
      <>
      <article>
        <div className="split left ">
           <img className="img" src={`./images/${localStorage.getItem("pname")}${localStorage.getItem("pid")}.jpg`} alt="noimg"/>
        </div>
        <div className="split right ">
          <span className="centered">
            <table className="tableitems">
              <tr>
                <th className="datas">Name</th>
              <th className="data">{localStorage.getItem("pname")}</th>
              </tr>

              <tr>
                <td className="datas">Category</td>
                <td className="data">{localStorage.getItem("category")}</td>
              </tr>

              <tr>
                <td className="datas">Price</td>
              <td className="data">{localStorage.getItem("price")}</td>
              </tr>

              <tr>
                <td className="datas">Colour</td>
                <td className="data">{localStorage.getItem("colour")}</td>
              </tr>
              <tr>
                <td className="datas">Body Material</td>
              <td className="data">{localStorage.getItem("bodyMaterial")}</td>
              </tr>

              <tr>
                <td className="datas">String Material</td>
              <td className="data">{localStorage.getItem("stringMaterial")}</td>
              </tr>
              <tr>
                <td className="datas">Quantity</td>
              <td className="data"><input  className="inputbar" min="1" id="quantity" type='number'/></td>
              </tr>
              <tr>
                <td className="datas"><Button buttonStyle={"btn--green--solid"}> Cart</Button></td>
              <td className="data" ><Button  buttonStyle={"btn--grey--solid"}>Wish</Button></td>
              </tr>
            </table>
          </span>
        </div>

      </article>
    </>
    );
  }
}
