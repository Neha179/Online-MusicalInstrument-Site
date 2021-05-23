import React,{ Component } from "react";
import Searchbar from "./Searchbar";
//import Gif from "./Gif";
import "../CSS/Home.css"
import AllProducts from "./AllProducts"
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="home">
                {/* <Navbar /> */}
                <br />
              {/*  <Searchbar /> */}
                <br />
                <AllProducts/>
                {/*<Gif />*/}
        </div>
        );
    }



}
