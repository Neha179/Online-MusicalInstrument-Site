import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link, useParams,useRouteMatch} from "react-router-dom";
import AddProduct from './AddProduct';
import AdminNameSearch from './AdminNameSearch';
import AdminPidSearch from './AdminPidSearch';
import ShowProduct from './ShowProduct';


export default function AdminFullSearch(){
    function setLink(){
       <Link></Link>
    }
    return(<Router>
        
        <ul>
            <li><Link to="/ByName">Search By Name</Link></li>
            <li><Link to="/ByPid">Search and Update By Pid</Link></li>
            <li><Link to="/showProduct">Show All Products</Link></li>
            <li><Link to="/addProduct">Add New Product</Link></li>
        </ul>
        
        
        <Switch>
            <Route path="/ByName"><AdminNameSearch/></Route>
            <Route path="/ByPid"><AdminPidSearch/></Route>
            <Route path="/showProduct"><ShowProduct/></Route>
            <Route path="/addProduct"><AddProduct/></Route>
            
        </Switch>
    </Router>
    );
}




