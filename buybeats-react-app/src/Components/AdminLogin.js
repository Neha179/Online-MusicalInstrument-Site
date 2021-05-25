import React, { useState } from 'react';
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
      setTimeout(() => history.push('/adminHome'), 1000);
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Invalid credentials ");
    });
  }
  return (
  < div className='adminlogin'>
      <span className="centreAdmin">
            <table className="tableitemsAdminLogin">
            <tr ><th colspan="2" className="centreitAdminLogin">Welcome To BuyBeats</th></tr><br/>
            <tr ><th colspan="2" className="centreitAdminLogin">Admin Login</th></tr><br/>
                <tr>
                    <td><label className="labelsAdminLogin">Email Id:</label></td>
                    <td><input className="inputsAdminLogin" type="text" {...email} autoComplete="new-password" /></td>
                </tr>
                <tr>
                    <td><label className="labelsAdminLogin">Password:</label></td>
                    <td><input className="inputsAdminLogin" type="password" {...password} autoComplete="new-password" /></td>
                </tr>
                <tr>
                  <td colspan="2" className="centreitAdminLogin">{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></td>
                </tr>
                <tr>
                      <td colspan="2" className="centreitAdminLogin">
                        <Button buttonStyle={"btn--green--solid"} buttonSize={"btn--medium"}
                        value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}>
                            Login
                          </Button>
                      </td>
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
