import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import PR from './ProtectedRoute'
import UserRegistration from './UserRegistration'
import AdminLogin from './AdminLogin'
import Home from './Home'
import Thank from './Thank'
export default class Routing extends React.Component {
  render(){
    return(
      <div>
      <BrowserRouter>
      <Switch>
      <Route  exact path="/" >
        <Thank />
      </Route>
      <Route exact path="/home" >
        <Home />
      </Route>

      </Switch>
      
      </BrowserRouter>
      </div>
    );
  }
}
