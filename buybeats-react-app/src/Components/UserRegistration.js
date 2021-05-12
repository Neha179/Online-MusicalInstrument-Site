import React, { useState } from 'react';
import { setUserSession } from '../Utils/Common.js';
import axios from 'axios';
import '../CSS/RegistrationForm.css';
import Button from '../Components/Button';

function UserRegistration(props) {
  const [loading, setLoading] = useState(false);
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');
  const phoneNumber= useFormInput('');
  const password = useFormInput('');
  const confirmPassword = useFormInput('');
 const [error, setError] = useState(null);
 

  const SignUp = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:8870/users/register', {firstName:firstName.value,lastName:lastName.value, email:email.value,phoneNumber:phoneNumber.value, password:password.value,confirmPassword:confirmPassword.value}).then((response) => {
    console.log("Response :" +response.data);
      setLoading(false);
      setUserSession(response.data.token, response.data.email);
      setError("Registered");
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("User already exists. Please change your email..! ");
    });
  }
  return (
    <div className="form-container">
      <form className="form" >
        <h1>Welcome to BuyBeats...!!!</h1><br />
      <table>
        <tr>
        <td><label className='form-label'>First Name :</label></td>
        <td><input className='form-input' type="text" {...firstName} autoComplete="new-password" placeholder="Enter your first name" /></td>
        </tr>
      <tr>
         <td><label className='form-label'>Last Name :</label></td>
        <td><input  className='form-input'  type="text" {...lastName} autoComplete="new-password" placeholder="Enter your last name"/></td> 
      </tr>
      <tr>
        <td><label className='form-label'>Email :</label></td>
        <td><input  className='form-input'  type="text" {...email} autoComplete="new-password" placeholder="Enter your email"  /></td>
      </tr>
      <tr>
        <td><label className='form-label'>Phone Number :</label></td>
        <td><input  className='form-input'  type="text" {...phoneNumber} autoComplete="new-password" placeholder="Enter your Phone number"/></td>
      </tr>
      <tr>
        <td><label className='form-label'>Password :</label></td>
        <td><input  className='form-input'  type="password" {...password} autoComplete="new-password" placeholder="Enter your Password"/></td>
      </tr>
      <tr>
         <td><label className='form-label'>Confirm Password :</label></td>
          <td><input  className='form-input' type="text" {...confirmPassword} autoComplete="new-password" placeholder="Confirm your Password" /></td>
      </tr>
      </table>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <Button buttonStyle={"btn--submit--solid"}
      buttonSize={"btn--large"} value={loading ? 'Loading...' : 'SignUp'} onClick={SignUp} disabled={loading}>
        Sign Up
      </Button>
    </form>
    </div>
  );
}
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const userChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: userChange
  }
}

export default UserRegistration;