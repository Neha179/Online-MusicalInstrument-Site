import React, { Component } from 'react';
import '../CSS/Navbar.css';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import ViewUserProfile from './ViewUserProfile';
import UpdateProfile from './UpdateProfile';
import {useHistory} from "react-router-dom";
import UserLogin from './UserLogin';
import CartList from './CartList';
import CartProductDetails from './CartProductDetails'

import AllProducts from './AllProducts'
import ProductDetails from './ProductDetails'

import confirmOrder from './ConfirmOrder';
import OrderHistory from './OrderHistory';
import ViewAddress from './ViewAddress'
import Payment from './Payment'



export default class Navbar extends Component {
    // constructor(props){
    //     super(props);
    //     this.container = React.createRef();
    //     this.state = { open: false }

    // }

    container= React.createRef();
    state = {
        open : false
    }


    handleClick = () => {
        this.setState({ open: !this.state.open })
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
                    {this.state.open && (
                        <div class="dropdown" onClick={this.handleClick}>
                            <ul className="ulist">
                                <li className="list"><Link to="/profile" className="link" >View Profile</Link></li>
                                <li className="list"><Link to="/cart" className="link" >Cart</Link></li>
                                <li className="list"><Link to="/order" className="link" >Order</Link></li>
                                <li className="list"><Link to="/login" className="link" >Logout</Link></li>
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
                        <Route path="/confirmOrder"><confirmOrder/></Route>



                    </Switch>
                </Router>


        )
    }
}



function Order() {

    return (
        <h2>Order Component</h2>
    )
}

function Cart() {
    return(
        <h2>Cart Component</h2>
    );
}
