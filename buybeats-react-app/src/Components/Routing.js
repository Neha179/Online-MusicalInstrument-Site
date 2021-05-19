import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import PR from './ProtectedRoute'
import UserRegistration from './UserRegistration'
import AdminLogin from './AdminLogin'
import Home from './Home'
import Navbar from './Navbar'
import Thank from './Thank'
import UserLogin from './UserLogin'
import AdminFullSearch from './AdminFullSearch';
import ShowProduct from './ShowProduct.js';
import AddProduct from './AddProduct.js';
export default class Routing extends React.Component {
  render(){
    return(
      <div>
      <BrowserRouter>
      <Switch>
      <Route  exact path="/" >
        <UserLogin/>
      </Route>
      <Route exact path="/check" >
        <Home />
      </Route>
      <Route exact path = "/adminHome">
        <AdminFullSearch />
      </Route>
      <Route exact path="/showProduct">
        <ShowProduct/>
      </Route>
      <Route exact path="/addProduct">
        <AddProduct />
      </Route>
      <Route exact path="/adminLogin">
        <AdminLogin />
      </Route>

      </Switch>

      </BrowserRouter>
      </div>
    );
  }
}