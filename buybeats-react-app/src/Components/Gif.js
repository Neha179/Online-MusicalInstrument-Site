import React from "react";
import logo from "../Animation/home.gif";
import '../CSS/AllProduct.css';
const Gif = () => {
        return(

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <img  className="imggif" src={logo} alt="***" />
            </div>
        );
    }

    export default Gif;
