import React, { Component } from 'react';
import Button from './Button.js';
import {withRouter} from 'react-router-dom';
import '../CSS/AddressDetails.css'

class AddressDetails extends Component {
    constructor(props) {
        super(props);
    }

    

    proceed = () => { 
        localStorage.setItem('aid',this.props.address.aid);
        console.log(localStorage.getItem('aid'));
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="address-box">
            <table className="shadow-address">
                <tr><td className="address-column">House Number:</td><td className="address-column">{this.props.address.houseNumber}</td></tr>
                <tr><td className="address-column">Street:</td><td className="address-column">{this.props.address.street}</td></tr>
                <tr><td className="address-column">City:</td><td className="address-column">{this.props.address.city}</td></tr>
                <tr><td className="address-column">State:</td><td className="address-column">{this.props.address.state}</td></tr>
                <tr><td className="address-column">PIN:</td><td className="address-column">{this.props.address.pinCode}</td></tr>
                <tr><td className="address-column">Address Type:</td><td className="address-column">{this.props.address.addressType}</td></tr>
                <br />
                <div className="button-proceed">
                   <Button onClick={()=>this.proceed()}>Proceed</Button>
                    
                </div>
            </table>
            </div>
        );
    }
}

export default withRouter (AddressDetails);