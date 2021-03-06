import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import PR from './ProtectedRoute'
import UserRegistration from './UserRegistration'
import AdminLogin from './AdminLogin'
import Home from './Home'
import Navbar from './Navbar'
import UserLogin from './UserLogin'
import AdminFullSearch from './AdminFullSearch';
import ShowProduct from './ShowProduct.js';
import AddProduct from './AddProduct.js';
import ViewUserProfile from './ViewUserProfile';
import ViewAddress from './ViewAddress.js';
import ProductList from './Product_list';
import ProductDetails from './ProductDetails';
import CartProductDetails from './CartProductDetails'
import ConfirmOrder from './ConfirmOrder';
import CartList from './CartList';
import Payment from './Payment';
import AddressDetails from './AddressDetails';
import NewAddress from './NewAddress'
import OrderHistory from './OrderHistory';
import OrderDetails from './OrderDetails';
import Logout from './Logout';


export default class Routing extends React.Component {
  render(){
    return(
      <div>
      <BrowserRouter>
      <Switch>
      <Route  exact path="/login" >
        <UserLogin/>
      </Route>
      <Route exact path="/" >
        <Navbar />
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
      <Route exact path="/searchedProducts">
        <ProductList />
      </Route>
      <Route exact path="/productDetails">
        <ProductDetails />
      </Route> 
      <Route  exact path="/cart" >
        <CartList/>
      </Route>

      <Route  exact path="/cartdetails" >
        <CartProductDetails/>
      </Route>
      <Route  exact path="/confirmOrder" >
        <ConfirmOrder/>
      </Route>

      <Route path="/profile">
        <ViewUserProfile />
      </Route>
      <Route path="/viewAddress"><ViewAddress /></Route>
      <Route path="/AddressDetails"><AddressDetails /></Route>
      <Route path="/newAddress"><NewAddress /></Route>
      <Route exact path="/register">
        <UserRegistration />
      </Route>
      <Route exact path="/orderHistory">
        <OrderHistory />
      </Route>
      <Route exact path="/orderDetails">
        <OrderDetails />
      </Route>

      <Route exact path="/payment">
        <Payment />
      </Route>

      <Route exact path="/logout">
        <Logout />
      </Route>

      </Switch>

      </BrowserRouter>
      </div>
    );
  }
}
