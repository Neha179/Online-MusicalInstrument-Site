import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import PR from './ProtectedRoute'
import UserRegistration from './UserRegistration'
import AdminLogin from './AdminLogin'
import Home from './Home'
import Navbar from './Navbar'
import Thank from './Thank'
import UserLogin from './UserLogin'
import Product_list from './Product_list'
import ProductDetails from './ProductDetails'
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
      <Route exact path="/search" >
        <Product_list />
      </Route>
      <Route exact path="/ProductDetails" >
        <ProductDetails />
      </Route>


      </Switch>

      </BrowserRouter>
      </div>
    );
  }
}
