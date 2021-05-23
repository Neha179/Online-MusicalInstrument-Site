import React, { Component } from 'react';
import '../CSS/NewAddress.css'
import OrderService from '../Services/OrderService.js';
import Button from './Button'
import Select from 'react-select';
export default class NewAddress extends Component {
    constructor(props) {
        super(props);
        this.service = new OrderService();
        this.state = {
            houseNumber : 0,
            street : '',
            city : '',
            state : '',
            pinCode : '',
            addressType : [
                {label: 'Work', value:'Work'},
                {label: 'Home', value: 'Home'}
            ]
        }
    }

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });

    }

    onCancel() {
        this.props.onCancel();
    }

    onSave() {
        this.props.onSubmit(this.state);
    }

    render () {
        return (
            <div className="newaddress">
                <center><div className="box">
                <h1 className="bigblue">New Address</h1>
            <form onSubmit={() => this.onSave()}>
            <table>
                <tr><td>House Number</td>
                    <td><input name="houseNumber" className="cobtrol-label" value={this.state.houseNumber} pattern="[A-Z][a-zA-Z\s]*([\d]*)\/?([\d]*)?" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td>Street</td>
                    <td><input name="street" className="control-label" value={this.state.street} pattern="[A-Z][a-zA-Z\s]*([\d]*)\/?([\d]*)?" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td>City</td>
                    <td><input name="city" className="control-label" value={this.state.city} pattern="[A-Z][a-z]{3,}" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td>State</td>
                    <td><input name="state" className="control-label" value={this.state.state} pattern="[A-Z][a-z]{4,}" required onChange={this.handleInput} /></td></tr>
                
                <tr><td>PIN</td>
                    <td><input name="pinCode" className="control-label" value={this.state.pinCode} pattern="[0-9]{6}" required onChange={this.handleInput} /></td></tr>
                
                <tr><td>Address Type</td>
                
                <Select options={this.state.addressType} />
                    <td></td></tr>
                <tr><td><Button class="btn btn-primary" type="submit">Save Address</Button></td>
                    <td><Button class="btn btn-warning" onClick={() => this.onCancel()}>Cancel Address</Button></td></tr>
            </table>
            </form></div></center>
            </div>
        )
    }
}
