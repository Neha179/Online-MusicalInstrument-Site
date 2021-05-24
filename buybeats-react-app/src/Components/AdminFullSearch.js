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
    <div>
        <div className="navbaradmin">
            <img className="leftadmin" src="../../images/admin.png" height="75px" width="120px"/>
            <img className="centeradmin" src="../../images/LOGO.PNG" alt="Buy-Beats"  />
            <Link to="/adminLogin"><img className="rightadmin" src="../../images/adminlogout.png" height="70px" width="70px" /></Link>
        </div>
        <div className="backgroundadmin">
        <Router className="routecontentAdmin">
        <ul>
            <li className="namesearch"><Link to="/ByName"><button className="buttonadmin">Search By Name</button></Link></li>
            <li className="namesearch"><Link to="/ByPid"><button className="buttonadmin">Search and Update By Pid</button></Link></li>
            <li className="namesearch"><Link to="/showProduct"><button className="buttonadmin">Show All Products</button></Link></li>
            <li className="namesearch"><Link to="/addProduct"><button className="buttonadmin">Add New Product</button></Link></li>
        </ul><br /><br /><br />
        <Switch>
                    <Route path="/ByName"><AdminNameSearch/></Route>
                    <Route path="/ByPid"><AdminPidSearch/></Route>
                    <Route path="/showProduct"><ShowProduct/></Route>
                    <Route path="/addProduct"><AddProduct/></Route>
         </Switch>
         </Router>
        </div>
       
         </div>

    );
}




