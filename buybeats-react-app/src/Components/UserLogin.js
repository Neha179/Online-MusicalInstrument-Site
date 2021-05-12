import React, { useState } from 'react';
import { setUserSession } from '../Utils/Common.js';
import axios from 'axios';
import '../CSS/RegistrationForm.css';
import Button from '../Components/Button';

function UserLogin(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  const Login = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:8870/users/login', { email:email.value, password:password.value}).then((response) => {
    console.log("Response :" +response.data);
      setLoading(false);
      setUserSession(response.data.token, response.data.email);
      setError("Logined");
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Invalid credentials ");
    });
  }
  return (
    <div className="form-container">
    <form className="form">
    <h1>Welcome Back to BuyBeats...!!!</h1><br />
      <table>
        <tr>
        <td><label className='form-label'>Email :</label></td>
        <td><input  className='form-input-1' type="text" {...email} autoComplete="new-password" placeholder="Enter your email" /></td>
      </tr>
      <br />
      <tr>
        <td><label className='form-label'>Password :</label></td>
        <td><input  className='form-input-1' type="password" {...password} autoComplete="new-password" placeholder="Enter your password" /></td>
      </tr>
    </table>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <Button buttonStyle={"btn--submit--solid"}
      buttonSize={"btn--large"} value={loading ? 'Loading...' : 'Login'} onClick={Login} disabled={loading}>
        Login
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

export default UserLogin;