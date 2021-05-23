import React, { Component } from 'react';
import Button from './Button.js';
import {withRouter} from 'react-router-dom';
import '../CSS/NewAddress.css'

class AddressDetails extends Component {
    constructor(props) {
        super(props);
    }

    

    proceed = () => { 
        localStorage.setItem('aid',this.props.address.aid);
        console.log(localStorage.getItem('aid'));
        this.props.history.push('/payment');
    }

    render() {
        return (
            <div>
            <table className="styled-table">
                <tr><td>House Number</td><td>{this.props.address.houseNumber}</td></tr>
                <tr><td>Street</td><td>{this.props.address.street}</td></tr>
                <tr><td>City</td><td>{this.props.address.city}</td></tr>
                <tr><td>State</td><td>{this.props.address.state}</td></tr>
                <tr><td>PIN</td><td>{this.props.address.pinCode}</td></tr>
                <tr><td>Address Type</td><td>{this.props.address.addressType}</td></tr>
                <tr>
                    <td><Button onClick={()=>this.proceed()}>Proceed</Button></td>
                    
                </tr>
            </table></div>
        )
    }
}

export default withRouter (AddressDetails);