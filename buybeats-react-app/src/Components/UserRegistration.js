import React, { useState } from 'react';
import { setUserSession } from '../Utils/Common.js';
import axios from 'axios';
import '../CSS/RegistrationForm.css';

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
      <form className="form">
        <h1>Welcome to BuyBeats...!!!</h1><br />
      <div className='form-inputs-1'>
          <label className='form-label'>First Name</label>
        <input className='form-input' type="text" {...firstName} autoComplete="new-password" placeholder="Enter your first name"/>
      </div>
      <div className='form-inputs-1'>
          <label className='form-label'>Last Name</label>
        <input  className='form-input' type="text" {...lastName} autoComplete="new-password" placeholder="Enter your last name" />
      </div>
      <div className='form-inputs-1'>
          <label className='form-label'>Email</label>
        <input  className='form-input' type="text" {...email} autoComplete="new-password" placeholder="Enter your email" />
      </div>
      <div className='form-inputs-1'>
          <label className='form-label'>Phone Number</label>
        <input  className='form-input' type="text" {...phoneNumber} autoComplete="new-password" placeholder="Enter your Phone number"/>
      </div>
      <div className='form-inputs-1'>
          <label className='form-label'>Password</label>
        <input  className='form-input' type="password" {...password} autoComplete="new-password" placeholder="Enter your Password"/>
      </div>
      <div className='form-inputs-1'>
          <label className='form-label'>Confirm Password</label>
        <input  className='form-input' type="text" {...confirmPassword} autoComplete="new-password" placeholder="Confirm your Password"/>
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input className='form-input-btn' type="button" value={loading ? 'Loading...' : 'SignUp'} onClick={SignUp} disabled={loading} /><br />
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