import React, { useState } from 'react';
//import { setUserSession } from '../Utils/Common.js';
import axios from 'axios';
import Button from './Button.js'
import '../CSS/UserLogin.css'
import auth from './Auth';

function UserLogin(props) {
  //const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const[user, setUser]=useState(null);

  const Login = () => {
    setError(null);
    //etLoading(true);
    axios.post('http://localhost:8870/users/login', { email:email.value, password:password.value}).then((response) => {
    //console.log("Response :" +response.data);
    //setLoading(false);
      //setUserSession(response.data.token, response.data.email);
      setUser( response.data);
      console.log(user);
      //auth.login(() =>{
      //  props.history.push("/check");
      //})
      // if(user ){
      //   localStorage.setItem("user",response.data.user);
      //   props.history.push("/check");
      // }
      localStorage.setItem("email",response.data.email);
      localStorage.setItem("password",response.data.password);
      localStorage.setItem("Fname",response.data.firstName);
      localStorage.setItem("Lname",response.data.lastName);
      localStorage.setItem("phoneNumber",response.data.phoneNumber);
      localStorage.setItem("Uid",response.data.uid);
      localStorage.setItem("address",response.data.address);
      localStorage.setItem("order",response.data.order);
      console.log(localStorage.getItem("email"));
      console.log(localStorage.getItem("password"));
      console.log(localStorage.getItem("address"));

    }).catch(error => {
      //setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Invalid credentials ");
    });
  }
  return (
    <div className='bgimage'>
    <span className='centre'>
    <table className="tableitems">
      <tr><th colspan="2" className="centreit">Welcome to Buybeats</th></tr><br/>
      <tr><th colspan="2" className="centreit">Login</th></tr><br /><br />
      <tr>
        <td className='labels'>Email:</td>
        <td><input className='inputs' type="text" {...email} autoComplete="new-password" /></td>
      </tr>
      <tr>
        <td className='labels'>Password:</td>
        <td><input type="password" {...password} autoComplete="new-password" /></td>
      </tr>
      <tr>
    <td colspan='2' className="centreit">{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}</td>
    </tr><br/>
    <tr>
      <td colspan="2" className="centreit"><Button  onClick={Login}
      buttonStyle={"btn--green--solid"} buttonSize={"btn--medium"}>Login</Button></td>
    </tr>
    </table>
  </span>
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
