import React,{ Component } from "react";
import Searchbar from "./Searchbar";
import Gif from "./Gif";
import NavbarWithoutHome from "./NavbarWithoutHome";
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <NavbarWithoutHome />
                <br />
                <Searchbar />
                <br />
                <Gif />
        </div>
        );
    }
               
        

}

