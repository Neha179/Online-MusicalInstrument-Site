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
    <div className="bgimage-userRegd">
    <form className="centre-userForm">
      <table className="tableitems-userRegd">
        <tr><td colspan="2" className="centreit-userForm">Welcome to BuyBeats...!!!</td></tr><br />
      <br />
      <tr>
        <td className='labels-userForm'><label>First Name:</label></td>
        <td><input className="inputs-userForm" id="firstName" type="text" {...firstName}
        autoComplete="new-password" pattern={"[A-Za-z]"} required/></td>
      </tr>
      <tr>
          <td><label className='labels-userForm'>Last Name:</label></td>
        <td><input  className="inputs-userForm" id="secondName" type="text" {...lastName}
        autoComplete="new-password" pattern={"[A-Za-z]"}  required /></td>
      </tr>
      <tr>
          <td><label className='labels-userForm'>Email:</label></td>
        <td><input  id="email" className="inputs-userForm" type="email" {...email} autoComplete="new-password" pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"} required/></td>
      </tr>
      <tr>
          <td><label className='labels-userForm'>Phone Number</label></td>
        <td><input id="phonenumber"
        className="inputs-userForm" type="text" {...phoneNumber} autoComplete="new-password" pattern={"[789][0-9]{9}"} required/></td>
      </tr>
      <tr>
          <td><label className='labels-userForm'>Password:</label></td>
        <td><input id="password"  className="inputs-userForm" type="password" {...password} pattern={".{6,}"}
        autoComplete="new-password" required/></td>
      </tr>
      <tr>
          <td><label className='labels-userForm'>Confirm Password:</label></td>
        <td><input  id="confirm"
        className="inputs-userForm"  type="password" {...confirmPassword} pattern={".{6,}"} autoComplete="new-password" required/></td>
      </tr>
      <tr><td colspan="2" className="centreit">{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
      </td></tr>
      <tr>
    <td colspan="2" className="centreit"> <Button buttonStyle={"btn--green--solid"} type={"submit"}
    buttonSize={"btn--medium"} value={loading ? 'Loading...' : 'SignUp'} onClick={SignUp} disabled={loading} >
        Sign Up</Button>
    </td>
    </tr><br/>
    <tr><td className="centreit-userForm" colspan="2">Already have account?<Link to="/login">Login here</Link></td></tr>
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
