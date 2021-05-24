import React from "react";
import Button from "./Button";
import { useHistory } from "react-router-dom";

import "../CSS/Logout.css";

function Logout(props){

    let history = useHistory();

    const redirect = () => {
        localStorage.removeItem("user");
        history.push('/')
    }

        return(
            <div className="userLogout" centered={false}>


                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <center><h1>You are successfully logout</h1></center>  
                <br />
                <br />
                <center><Button buttonStyle={"btn--green--solid"} buttonSize={"btn--large"}
                         onClick={redirect}  >
                                Go back to Home   
                        </Button>
                </center>
                        
                
                </div>

        );
    }

export default Logout;