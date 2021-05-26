//Authors : Aakansha and Darshan

import React from 'react'
import Button from './Button'
import service from '../Services/ProductSearchService'
import { withRouter, Redirect } from 'react-router-dom';


class CartProductDetails extends React.Component{

  onRemove = () =>{
    console.log("entered remove function")
    console.log(localStorage.getItem("entryid"))
    service.removeFromCart(localStorage.getItem("entryid"))
    .then((response)=>{
        console.log("response here")
        console.log(response)
        setTimeout(() => this.props.history.push('/cart', 10000));
    }).catch(error=>{
      console.log(error)
      console.log("error came")
      //console.log(error.response.status)
    })
    //setTimeout(() => this.props.history.push('/cart', 10000));

    console.log("service callled")

    //window.location.reload(false);
    //this.props.history.push("/cart");
  }


  render(){

    console.log("I reached cart product details page");

    return(
      <>
      <article>
        <div className="splitDetail leftDetail ">
           <img className="imgset" src={`./images/${localStorage.getItem("cpname")}${localStorage.getItem("cpid")}.jpg`} alt="noimg"/>
        </div>
        <div className="splitDetail rightDetail ">
          <span className="centeredDetail">
            <table className="tableitems">
              <tr>
                <th className="datas">Name</th>
              <th className="data">{localStorage.getItem("cpname")}</th>
              </tr>

              <tr>
                <td className="datas">Category</td>
                <td className="data">{localStorage.getItem("ccategory")}</td>
              </tr>

              <tr>
                <td className="datas">Price</td>
              <td className="data">{localStorage.getItem("cprice")}</td>
              </tr>

              <tr>
                <td className="datas">Colour</td>
                <td className="data">{localStorage.getItem("ccolour")}</td>
              </tr>
              <tr>
                <td className="datas">Body Material</td>
              <td className="data">{localStorage.getItem("cbodyMaterial")}</td>
              </tr>

              <tr>
                <td className="datas">String Material</td>
              <td className="data">{localStorage.getItem("cstringMaterial")}</td>
              </tr>
              <tr>
                <td className="datas">Quantity</td>
                <td className="data">{localStorage.getItem("quantity")}</td>
              </tr>
            </table>
            <Button   buttonStyle={"btn--danger--solid"} key={this.props.pid}
                  onClick={() => this.onRemove(this.props)}> Remove </Button>

          </span>
        </div>

      </article>
    </>
    );
  }
}

export default  withRouter (CartProductDetails);
