//Author : Neha
import React from "react";
import Navbar from "./Navbar";
import thanks from "../Images/thanks.jpg";
import Button from "./Button";
import  { Redirect  } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Home from "./Home";

function Thank(props){

    let history = useHistory();

    const redirect = () => {
        history.push('/')
    }

        return(
            <div centered={false}>
                {/* <Navbar /> */}
                <br />
                <center><img src={thanks} height="450" width="550" alt="Thank you for your purchase" /></center>
                <br />
                <center>
                    <h3> Your  Order Will be delivered in 7 to 10 working days</h3><br/>
                  <Button buttonStyle={"btn--green--solid"} buttonSize={"btn--large"}
                         onClick={redirect}  >
                                Continue Shopping
                        </Button>

                </center>


                </div>

        );
    }

export default Thank;
