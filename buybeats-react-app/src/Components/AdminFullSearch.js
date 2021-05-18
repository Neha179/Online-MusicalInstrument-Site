import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link, useParams,useRouteMatch} from "react-router-dom";
import AdminNameSearch from './AdminNameSearch';
import AdminPidSearch from './AdminPidSearch';


export default function AdminFullSearch(){
    function setLink(){
       <Link></Link>
    }
    return(<Router>
        
        <ul>
            <li><Link to="/ByName">Search By Name</Link></li>
            <li><Link to="/ByPid">Search By Pid</Link></li>
            
        </ul>
        
        
        <Switch>
            <Route exact path="/ByName"><AdminNameSearch/></Route>
            <Route path="/ByPid"><AdminPidSearch/></Route>
            
        </Switch>
    </Router>
    );
}




