import React, { useState } from 'react';
import { setUserSession } from '../Utils/Common.js';
import axios from 'axios';
import '../CSS/AdminLogin.css'
import Button from './Button'
import { useHistory } from 'react-router';

function AdminLogin(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  let history = useHistory();

  const handleLogin = () => {
    setError(null);
    setLoading(true);
  axios.post('http://localhost:8870/admin/login', { email:email.value, password:password.value}).then((response) => {
      setLoading(false);
      setUserSession(response.data.token, response.data.email);
      setTimeout(() => history.push('/adminHome'), 1000);
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Invalid credentials ");
    });
  }
  return (
  < div className='adminlogin'>
      <span className="centre">
            <table className="tableitems">
            <tr ><th colspan="2" className="centreit">Welcome To BuyBeats</th></tr><br/>
            <tr ><th colspan="2" className="centreit">Admin Login</th></tr><br/>
                <tr>
                    <td><label className="labels">Email Id:</label></td>
                    <td><input className="inputs" type="text" {...email} autoComplete="new-password" /></td>
                </tr>
                <tr>
                    <td><label className="labels">Password:</label></td>
                    <td><input type="password" {...password} autoComplete="new-password" /></td>
                </tr>
                <tr>
                  <td colspan="2" className="centreit">{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></td>
                </tr>
                <tr>
                      <td colspan="2" className="centreit"><Button buttonStyle={"btn--green--solid"} buttonSize={"btn--medium"}
                        value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}>
                            Login
                            </Button></td>
              </tr>
    </table>
    </span>
  </div>
  );
}
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default AdminLogin;
