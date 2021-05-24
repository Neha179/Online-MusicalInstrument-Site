import React, { useState } from 'react';
import { setUserSession } from '../Utils/Common.js';
import axios from 'axios';
import '../CSS/RegistrationForm.css';
import Button from './Button.js';
import {Link, useHistory} from 'react-router-dom';

function UserRegistration(props) {
  const [loading, setLoading] = useState(false);
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');
  const phoneNumber= useFormInput('');
  const password = useFormInput('');
  const confirmPassword = useFormInput('');
 const [error, setError] = useState(null);

 let history = useHistory();

  const SignUp = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:8870/users/register',
    {firstName:firstName.value,lastName:lastName.value, email:email.value,phoneNumber:phoneNumber.value,
      password:password.value,confirmPassword:confirmPassword.value}).then((response) => {
    console.log(firstName);
      setLoading(false);
      setUserSession(response.data.token, response.data.email);
      setError("Registered");
      history.push('/login');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("User already exists. Please change your email..! ");
    });
  }
  return (
    <div className="bgimageuserRegd">
    <form className="centreuserForm" onSubmit={SignUp}>
      <table className="tableitemsuserRegd">
        <tr><td colspan="2" className="centreituserForm">Welcome to BuyBeats...!!!</td></tr><br />
      <br />
      <tr>
        <td className='labelsuserForm'><label>First Name:</label></td>
        <td><input className="inputsuserForm" id="firstName" type="text" {...firstName}
        autoComplete="new-password" pattern="[A-Za-z]{4,}" required/></td>
      </tr>
      <tr>
          <td><label className='labelsuserForm'>Last Name:</label></td>
        <td><input  className="inputsuserForm" id="secondName" type="text" {...lastName}
        autoComplete="new-password" pattern="[A-Za-z]{4,}" required /></td>
      </tr>
      <tr>
          <td><label className='labelsuserForm'>Email:</label></td>
        <td><input  id="email" className="inputsuserForm" type="email" {...email} autoComplete="new-password" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required/></td>
      </tr>
      <tr>
          <td><label className='labelsuserForm'>Phone Number</label></td>
        <td><input id="phonenumber"
        className="inputsuserForm" type="text" {...phoneNumber} autoComplete="new-password" pattern="[789][0-9]{9}" required/></td>
      </tr>
      <tr>
          <td><label className='labelsuserForm'>Password:</label></td>
        <td><input id="password"  className="inputsuserForm" type="password" {...password} pattern=".{6,}"
        autoComplete="new-password" required/></td>
      </tr>
      <tr>
          <td><label className='labelsuserForm'>Confirm Password:</label></td>
        <td><input  id="confirm"
        className="inputsuserForm"  type="password" {...confirmPassword} pattern=".{6,}" autoComplete="new-password" required/></td>
      </tr>
      <tr><td colspan="2" className="centreituserForm">{error && <><small style={{ color: 'crimson' }}>{error}</small><br /></>}
      </td></tr>
      <tr>
    <td colspan="2" className="centreituserForm"> <Button buttonStyle={"btn--green--solid"} type={"submit"}
    buttonSize={"btn--medium"} value={loading ? 'Loading...' : 'SignUp'}  disabled={loading} >
        Sign Up</Button>
    </td>
    </tr><br/>
    <tr><td className="centreituserForm" colspan="2">Already have account?<Link to="/login">Login here</Link></td></tr>
    </table>
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
