import React, { useState } from 'react';
import { setUserSession } from '../Utils/Common.js';
import axios from 'axios';
import '../CSS/RegistrationForm.css';
import Button from './Button.js'

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
    axios.post('http://localhost:8870/users/register',
    {firstName:firstName.value,lastName:lastName.value, email:email.value,phoneNumber:phoneNumber.value,
      password:password.value,confirmPassword:confirmPassword.value}).then((response) => {
    console.log(firstName);
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
    <div className="bgimage">
    <form className="centre">
      <table className="tableitems">
        <tr><td colspan="2" className="centreit">Welcome to BuyBeats...!!!</td></tr><br />
      <tr>
        <td className='labels'><label>First Name:</label></td>
        <td><input className="inputs" id="firstName" type="text" {...firstName}
        autoComplete="new-password"/></td>
      </tr>
      <tr>
          <td><label className='labels'>Last Name:</label></td>
        <td><input  className="inputs" id="secondName" type="text" {...lastName}
        autoComplete="new-password" /></td>
      </tr>
      <tr>
          <td><label className='labels'>Email:</label></td>
        <td><input  id="email" className="inputs" type="email" {...email} autoComplete="new-password"/></td>
      </tr>
      <tr>
          <td><label className='labels'>Phone Number</label></td>
        <td><input id="phonenumber"
        className="inputs" type="text" {...phoneNumber} autoComplete="new-password"/></td>
      </tr>
      <tr>
          <td><label className='labels'>Password:</label></td>
        <td><input id="password"  className="inputs" type="password" {...password}
        autoComplete="new-password"/></td>
      </tr>
      <tr>
          <td><label className='labels'>Confirm Password:</label></td>
        <td><input  id="confirm"
        className="inputs"  type="password" {...confirmPassword} autoComplete="new-password"/></td>
      </tr>
      <tr><td colspan="2" className="centreit">{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
      </td></tr>
      <tr>
    <td colspan="2" className="centreit"> <Button buttonStyle={"btn--green--solid"} type={"submit"}
    buttonSize={"btn--medium"} value={loading ? 'Loading...' : 'SignUp'} onClick={SignUp} disabled={loading} >
        Sign Up</Button>
    </td>
    </tr><br/>
    <tr><td className="centreit" colspan="2">Already have account?Login here</td></tr>
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
