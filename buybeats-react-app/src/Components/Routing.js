import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import PR from './ProtectedRoute'
import UserRegistration from './UserRegistration'
import AdminLogin from './AdminLogin'
export default class Routing extends React.Component {
  render(){
    return(
      <div>
      <BrowserRouter>
      <Route  exact path="/admin" component={AdminLogin}/>
      </BrowserRouter>
      </div>
    );
  }
}
