import React,{ Component } from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Gif from "./Gif";
import "../CSS/Home.css"
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className=".home">
                {/* <Navbar /> */}
                <br />
                <Searchbar />
                <h1>{localStorage.getItem("email")}</h1>
                <br />
                <Gif />
        </div>
        );
    }



}
