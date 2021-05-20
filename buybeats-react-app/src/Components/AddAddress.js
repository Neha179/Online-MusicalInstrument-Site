import React, { useState } from 'react';
import { setUserSession } from '../Utils/Common.js';
import axios from 'axios';
import Button from './Button.js'
import { useHistory } from "react-router-dom";

function AddAddressDirect() {

    const houseNumber = useFormInput('');
    const street = useFormInput('');
    const city = useFormInput();
    const state= useFormInput();
    const pincode = useFormInput('');
    const addressType = useFormInput('');

        const address = {
            houseNumber:houseNumber.value,
            street:street.value,
            city:city.value,
            state:state.value,
            pincode:pincode.value,
            addressType:addressType.value
        };

       const [error, setError] = useState(null);

       let history = useHistory();

        const redirect = () => {
            history.push('/viewAddress')
        }


          const AddAddress = (e) => {
          e.preventDefault();
          setError(null);
          axios.post('http://localhost:8870/order/addAaddress',address).then((response) => {
              setTimeout(() => history.push('/viewAddress'), 3000);
          }).catch(error => {
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Adding address failed ");
          });
        }
        return (
          <div>
            <form onSubmit={Add} className="centre">
              <table >
                <tr><td colspan="2" className="centreit">New Address</td></tr><br />
              <tr>
                <td ><label className="labels">HouseNumber:</label></td>
                <td><input id="houseNumber" type="text" {...houseNumber} 
                required/></td>
              </tr>

              <tr>
                <td ><label className="labels">Street:</label></td>
                <td><input id="street" type="text" {...street} 
                required/></td>
              </tr>

              <tr>
                <td ><label className="labels">city:</label></td>
                <td><input id="city " type="text" {...city} 
                required/></td>
              </tr>

              <tr>
                <td ><label className="labels">this.state:</label></td>
                <td><input id="state" type="text" {...state} 
                required/></td>
              </tr>

              <tr>
                <td ><label className="labels">this.pincode:</label></td>
                <td><input id="pincode" type="text" {...pincode} 
                required/></td>
              </tr>

              <tr>
                <td ><label className="labels">this.addressType:</label></td>
                <td><input id="addressType" type="text" {...addressType} 
                required/></td>
              </tr>

            <tr>
            <td colspan="2" className="centreit"> <Button buttonStyle={"btn--primary--solid"} type={"submit"} 
            buttonSize={"btn--medium"}>Add Address</Button></td>
            </tr><br/>
            </table>
            <td className="centreit"> <Button buttonStyle={"btn--danger--solid"} type={"submit"} 
            buttonSize={"btn--medium"} onClick={redirect}>Cancel</Button></td>
            </form>

        </div> 
        );
      }
      const useFormInput = initialValue => {
        const [value, setValue] = useState(initialValue);

        const addressChange = e => {
          // e.preventDefault();
          setValue(e.target.value);
          // this.productName = "";
        }
        return {
          value,
          onChange: addressChange
        }
}

export default AddAddressDirect; 