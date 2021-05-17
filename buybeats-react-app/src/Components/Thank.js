import React from "react";
import Navbar from "./Navbar";
import thanks from "../Images/thanks.jpg";
import button from "../CSS/Button.css";

export default class Thank extends React.Component {
    render() {
        return(
            <div >
                <Navbar />
                <br />
                <center><img src={thanks} height="450" width="550" alt="Thank you for your purchase" /></center>  
                <button />
            </div>

        );
    }
}