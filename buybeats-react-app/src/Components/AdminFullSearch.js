import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link, useParams,useRouteMatch, useHistory} from "react-router-dom";
import AddProduct from './AddProduct';
import AdminNameSearch from './AdminNameSearch';
import AdminPidSearch from './AdminPidSearch';
import ShowProduct from './ShowProduct';
import '../CSS/AdminFullSearch.css';
import {UseHistory} from 'react-router-dom';


export default function AdminFullSearch(){

    let history = useHistory();
    const redirectTo = () =>
    {
        history.push("/adminLogin");
    }
    function setLink(){
       <Link></Link>
    }
    return(
    <div className="background">
        <br />
        <button className="logout-button" onClick={redirectTo}>Logout</button>
          <Router>
        <ul>
            <li><Link to="/ByName"><button className="button">Search By Name</button></Link></li>
            <li><Link to="/ByPid"><button className="button">Search and Update By Pid</button></Link></li>
            <li><Link to="/showProduct"><button className="button">Show All Products</button></Link></li>
            <li><Link to="/addProduct"><button className="button">Add New Product</button></Link></li>
        </ul>
        <br /><br /><br />
          <Switch>
            <Route path="/ByName"><AdminNameSearch/></Route>
            <Route path="/ByPid"><AdminPidSearch/></Route>
            <Route path="/showProduct"><ShowProduct/></Route>
            <Route path="/addProduct"><AddProduct/></Route>
        </Switch>
    </Router>
    </div>
    );
}




