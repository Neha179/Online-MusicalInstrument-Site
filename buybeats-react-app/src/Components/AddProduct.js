import React, { useState } from 'react';
import { setUserSession } from '../Utils/Common.js';
import axios from 'axios';
import '../CSS/AddProduct.css';
import Button from './Button.js'
import { store } from 'react-notifications-component';
import { useHistory } from "react-router-dom";
import ReactNotifications from 'react-notifications-component';
import 'animate.css';
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

       const [msg, setMsg] = useState(null);

       let history = useHistory();

        const redirect = () => {
            history.push('/adminHome')
        }


        // const timeOutId = setTimeout(() => setDisplayMessage(query), 500);

        const Add = (e) => {
          e.preventDefault();
          setMsg(null);
          axios.post('http://localhost:8870/admin/add/product',product).then((response) => {
              setTimeout(() => history.push('/showProduct'), 3000);
                setMsg("Product added..!");
              store.addNotification({
                title: ' ',   //dont remove this as the library req it
                message: "Product added! Back to product list.", //the message to do be displayed on notification
                type:'success',  //color of the notification you can only have values like 'default', 'success', 'info', 'warning'
                container: 'bottom-left',                // where to position the notifications
                animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
    
                dismiss: {
                  duration: 3000
                }
              });

          }).catch(error => {
            if (error.response.status === 401) setMsg(error.response.data.message);
            else setMsg("Adding product failed ");
          });


          



        }
        return (
          <div>
            <form onSubmit={Add} className="fcentre">
                <br/>
                <h1 className="fcentreit">New Product</h1><br />
                <table >
              <tr>
                <td ><label className="labels-add">Name:</label></td>
                <td>
                
                <select {...productName}>
                    <option value="Guitar">Guitar</option>
                    <option value="Sitar">Sitar</option>
                    <option value="Ukulele">Ukulele</option>
                    <option value="Violin">Violin</option>
                  </select>
                  </td>
              </tr>
              <tr>
                  <td><label className="labels-add" >Brand:</label></td>
                <td><input  className="input-add" placeholder="Eg: Guild" id="brand" type="text" {...brand}
                required /></td>
              </tr>
              <tr>
                  <td><label className="labels-add">Price:</label></td>
                <td><input className="input-add"  id="price"  type="number" {...price} required/></td>
                  
              </tr>
              <tr>
                  <td><label className="labels-add">Stock:</label></td>
                <td><input className="input-add" placeholder="0" id="stock" type="number" {...stock} required/></td>
              </tr>
              <tr>
                  <td><label className="labels-add">Category:</label></td>
                <td>
                <select {...category}>
                    <option value="Acoustic">Acoustic</option>
                    <option value="Classical">Classical</option>
                    <option value="Mini">Mini</option>
                    <option value="Toy">Toy</option>
                    <option value="Electrical">Electrical</option>
                  </select>
                </td>
              </tr>
              <tr>
                  <td><label className="labels-add" >Colour:</label></td>
                <td><input className="input-add" placeholder="Eg: Black " id="color"  type="text" {...colour} required/></td>
              </tr>
              <tr>
                  <td><label className="labels-add">Size:</label></td>
                <td><input className="input-add" id="size" type="number" {...size} required/></td>
              </tr>
              <tr>
                  <td><label className="labels-add">Body Material:</label></td>
                <td>
                <select {...bodyMaterial}>
                    <option value="Wooden">Wooden</option>
                    <option value="Plastic">Plastic</option>
                    <option value="Metallic">Metallic</option>
                
                  </select>
                </td>
              </tr>
              <tr>
                  <td><label className="labels-add" >String Material:</label></td>
                <td>
                <select {...stringMaterial}>
                    <option value="Thread">Thread</option>
                    <option value="Nylon">Nylon</option>
                    <option value="Plastic">Plastic</option>
                
                  </select>
                </td>
              </tr><br />
              <tr><td colspan="2">{msg && <><small style={{ color: 'Green' }}>{msg}</small><br /></>}
              </td></tr>
              <tr> 
              <td className="centreit"> <Button buttonStyle={"btn--danger--solid"} 
            buttonSize={"btn--medium"} onClick={redirect}>Cancel</Button></td>
            <td className="centreit"> <Button buttonStyle={"btn--primary--solid"} type={"submit"} 
            buttonSize={"btn--medium"}>Add Product</Button></td>
           
            </tr><br/>
            </table>
            
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