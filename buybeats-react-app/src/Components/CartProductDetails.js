import React from 'react'


export default class CartProductDetails extends React.Component{
  render(){

    console.log("I reached cart product details page");

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
          </span>
        </div>

      </article>
    </>
    );
  }
}
