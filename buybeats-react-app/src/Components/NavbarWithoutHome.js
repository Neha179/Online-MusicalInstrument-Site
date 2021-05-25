//Not using this
import React from "react";
import '../CSS/Navbar.css'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

export default class NavbarWithoutHome extends React.Component {


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

                    <center><img src="../../images/LOGO.PNG" alt="Buy Beats" /></center>



                    <div ref={this.container}>
                    <img className = "navbar-user" src="../../images/man-user.png"
                        onClick={this.handleClick} alt='User'></img>
                    {this.state.open && (
                        <div class="dropdown" onClick={this.handleClick}>
                            <ul>
                                <li><Link to="/profile" className="link" >View Profile</Link></li>
                                <li><Link to="/order" className="link" >Order</Link></li>
                                <li><Link to="/cart" className="link" >Cart</Link></li>
                                <li><Link to="/wish" className="link" >Wish</Link></li>
                                <li><Link to="/logout" className="link" >Logout</Link></li>
                            </ul>
                        </div>
                    )}
                    </div>
                </nav>

                    <Switch>
                        <Route path="/profile"><ViewProfile/></Route>
                        <Route path="/order"><Order/></Route>
                        <Route path="/cart"><Cart/></Route>
                        <Route path="/wish"><Wish/></Route>
                        <Route path="/logout"><Logout/></Route>
                    </Switch>
                </Router>


        )
    }
}


function ViewProfile() {
    return (
        <h2>Profile Component</h2>
    );
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

function Wish() {
    return (
        <h2>Wish Component</h2>
    );
}

function Logout() {

    return (
        <h2>Logout Component</h2>
    )
}
