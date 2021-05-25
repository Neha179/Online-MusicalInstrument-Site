//Authors : Arya and Darshan

import React, { Component } from 'react';
import '../CSS/Navbar.css';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import ViewUserProfile from './ViewUserProfile';
import UpdateProfile from './UpdateProfile';

import UserLogin from './UserLogin';
import CartList from './CartList';
import CartProductDetails from './CartProductDetails'
import Logout from './Logout.js'
import AllProducts from './AllProducts'
import ProductDetails from './ProductDetails'

import ConfirmOrder from './ConfirmOrder';
import OrderHistory from './OrderHistory';
import ViewAddress from './ViewAddress'
import Payment from './Payment'
import Thank from './Thank.js'
import UserRegistration from './UserRegistration';



export default class Navbar extends Component {

    container= React.createRef();
    state = {
        open : false,
        user : false
    }


    handleClick = () => {
        this.setState({ open: !this.state.open })
        if(localStorage.getItem("user")!=null)
            this.setState({user:true});
        else
            this.setState({user:false})
    }



    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);

    }

    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);

    }


    handleClickOutside = (event) => {
       if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false,
            });

        }
    };


    render() {
        return(
            <Router>
                <nav className="navbar">
                   <Link to='/' >
                       <img  className="navbar-home" src="../../images/home.png" alt='Home'></img>
                    </Link>

                    <img src="../../images/LOGO.PNG" alt="Buy Beats"></img>

                    <div ref={this.container}>
                    <img className = "navbar-user" src="../../images/man-user.png"
                        onClick={this.handleClick} alt='User'></img>
                    {this.state.open && this.state.user &&(
                        <div class="dropdown" onClick={this.handleClick}>
                            <ul className="ulist">
                                <li className="list"><Link to="/profile" className="link" >View Profile</Link></li>
                                <li className="list"><Link to="/cart" className="link" >Cart</Link></li>
                                <li className="list"><Link to="/order" className="link" >Order</Link></li>
                                <li className="list"><Link to="/logout" className="link">Logout</Link></li>
                            </ul>
                        </div>
                    )}
                    {this.state.open && !this.state.user &&(
                        <div class="dropdown" onClick={this.handleClick}>
                            <ul className="ulist">
                                <li className="list" ><Link to="/login" className="link" >Login</Link></li>

                            </ul>
                        </div>
                    )}
                    </div>
                </nav>

                    <Switch>
                        <Route exact path="/"><AllProducts/></Route>
                        <Route path="/profile"><ViewUserProfile/></Route>
                        <Route path="/userprofile"><ViewUserProfile/></Route>
                        <Route path="/order"><OrderHistory/></Route>
                        <Route path="/cart"><CartList/></Route>
                        <Route path="/login"><UserLogin /></Route>
                        <Route path="/updateprofile"><UpdateProfile/></Route>
                        <Route path="/cartdetails"><CartProductDetails/></Route>
                        <Route path="/viewAddress"><ViewAddress/></Route>
                        <Route path="/ProductDetails"><ProductDetails/></Route>
                        <Route path="/payment"><Payment/></Route>
                        <Route path="/confirmOrder"><ConfirmOrder/></Route>
                        <Route path="/thank"><Thank/></Route>
                        <Route path="/logout"><Logout/></Route>
                        <Route path="/register"><UserRegistration/></Route>
                    </Switch>
                </Router>


        )
    }
}
