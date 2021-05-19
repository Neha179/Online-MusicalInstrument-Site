import React, { useState } from 'react';
import { setUserSession } from '../Utils/Common.js';
import axios from 'axios';
import '../CSS/AddProduct.css';
import Button from './Button.js'
import { store } from 'react-notifications-component';
import { useHistory } from "react-router-dom";
import ReactNotifications from 'react-notifications-component';
// import 'animate.css';
import 'react-notifications-component/dist/theme.css';

function AddProduct() {

        const productName = useFormInput('');
        const brand = useFormInput('');
        const price = useFormInput();
        const stock= useFormInput();
        const category = useFormInput('');
        const colour = useFormInput('');
        const size= useFormInput();
        const bodyMaterial = useFormInput('');
        const stringMaterial = useFormInput('');

        const product = {productName:productName.value,
            brand:brand.value,
            price:price.value,
            stock:stock.value,
            category:category.value,
            colour:colour.value,
            size:size.value,
            bodyMaterial:bodyMaterial.value,
            stringMaterial:stringMaterial.value
        };

       const [error, setError] = useState(null);

       let history = useHistory();

        const redirect = () => {
            history.push('/showProduct')
        }


        // const timeOutId = setTimeout(() => setDisplayMessage(query), 500);

        const Add = (e) => {
          e.preventDefault();
          setError(null);
          axios.post('http://localhost:8870/admin/add/product',product).then((response) => {
              setTimeout(() => history.push('/showProduct'), 3000);
          }).catch(error => {
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Adding product failed ");
          });


          store.addNotification({
            title: ' ',   //dont remove this as the library req it
            message: "Product added! Back to product list.", //the message to do be displayed on notification
            type:'success',  //color of the notification you can only have values like 'default', 'success', 'info', 'warning'
            container: 'bottom-right',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied

            dismiss: {
              duration: 3000
            }
          })



        }
        return (
          <div>
            <form onSubmit={Add} className="centre">
              <table >
                <tr><td colspan="2" className="centreit">New Product</td></tr><br />
              <tr>
                <td ><label className="labels">Name:</label></td>
                <td><input id="productName" type="text" {...productName} 
                required/></td>
              </tr>
              <tr>
                  <td><label className="labels" >Brand:</label></td>
                <td><input   id="brand" type="text" {...brand}
                required /></td>
              </tr>
              <tr>
                  <td><label className="labels">Price:</label></td>
                <td><input  id="price"  type="number" {...price} required/></td>
              </tr>
              <tr>
                  <td><label className="labels">Stock:</label></td>
                <td><input id="stock" type="number" {...stock} required/></td>
              </tr>
              <tr>
                  <td><label className="labels">Category:</label></td>
                <td><input id="category"   type="text" {...category}
                required/></td>
              </tr>
              <tr>
                  <td><label className="labels" >Colour:</label></td>
                <td><input  id="color"  type="text" {...colour} required/></td>
              </tr>
              <tr>
                  <td><label className="labels">Size:</label></td>
                <td><input id="size" type="number" {...size} required/></td>
              </tr>
              <tr>
                  <td><label className="labels">Body Material:</label></td>
                <td><input id="bodyMaterial" type="text" {...bodyMaterial}
                required/></td>
              </tr>
              <tr>
                  <td><label className="labels" >String Material:</label></td>
                <td><input  id="stringMaterial" type="text" {...stringMaterial} required/></td>
              </tr>
              <tr><td colspan="2">{error && <><small style={{ color: 'Green' }}>{error}</small><br /></>}
              </td></tr>
              <tr>
            <td colspan="2" className="centreit"> <Button buttonStyle={"btn--primary--solid"} type={"submit"} 
            buttonSize={"btn--medium"}>Add Product</Button></td>
            </tr><br/>
            </table>
            <td className="centreit"> <Button buttonStyle={"btn--danger--solid"} type={"submit"} 
            buttonSize={"btn--medium"} onClick={redirect}>Cancel</Button></td>
            </form>

            <div>    <ReactNotifications className='centreit'/>    </div> 
            </div>
        );
      }
      const useFormInput = initialValue => {
        const [value, setValue] = useState(initialValue);

        const productChange = e => {
          // e.preventDefault();
          setValue(e.target.value);
          // this.productName = "";
        }
        return {
          value,
          onChange: productChange
        }
}

export default AddProduct; 