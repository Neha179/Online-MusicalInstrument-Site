import React from "react";
import logo from '../assets/load.gif'



export default class Gif extends React.Component {
    render() {
        return(
            <img src={logo} alt="loading..." />
        );
    }
}