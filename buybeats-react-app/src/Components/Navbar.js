import React, { Component } from 'react';
import '../CSS/Navbar.css';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import ViewUserProfile from './ViewUserProfile';
import UpdateProfile from './UpdateProfile';
import {useHistory} from "react-router-dom";
import UserLogin from './UserLogin';
import CartList from './CartList';

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
                            <ul>
                                <li><Link to="/profile" className="link" >View Profile</Link></li>
                                <li><Link to="/cart" className="link" >Cart</Link></li>
                                <li><Link to="/order" className="link" >Order</Link></li>
                                <li><Link to="/login" className="link" >Logout</Link></li>
                            </ul>
                        </div>
                    )}  
                    </div>
                </nav>                   

                    <Switch>
                        <Route exact path="/"><Home/></Route>
                        <Route path="/profile"><ViewUserProfile/></Route>
                        <Route path="/userprofile"><ViewUserProfile/></Route>
                        <Route path="/order"><Order/></Route>
                        <Route path="/cart"><CartList/></Route>
                        <Route path="/login"><UserLogin /></Route>
                        <Route path="/updateprofile"><UpdateProfile/></Route>
                        
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


