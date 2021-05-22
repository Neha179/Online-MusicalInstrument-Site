import React, { Component } from 'react';
import OrderService from '../Services/OrderService.js';

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
            addressType : ''
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
            <form onSubmit={() => this.onSave()}>
            <table class="table table-dark">
                <tr><td>House Number</td>
                    <td><input name="houseNumber" value={this.state.houseNumber} required onChange={this.handleInput} /></td></tr>
                <tr><td>Street</td>
                    <td><input name="street" value={this.state.street} required onChange={this.handleInput} /></td></tr>
                <tr><td>City</td>
                    <td><input name="city" value={this.state.city} required onChange={this.handleInput} /></td></tr>
                <tr><td>State</td>
                    <td><input name="state" value={this.state.state} required onChange={this.handleInput} /></td></tr>
                <tr><td>PIN</td>
                    <td><input name="pinCode" value={this.state.pinCode} pattern="[0-9]{6}" required onChange={this.handleInput} /></td></tr>
                <tr><td>Address Type</td>
                    <td><input name="addressType" value={this.state.addressType} required onChange={this.handleInput} /></td></tr>
                <tr><td><button class="btn btn-primary" type="submit">Save Address</button></td>
                    <td><button class="btn btn-warning" onClick={() => this.onCancel()}>Cancel Address</button></td></tr>
            </table>
            </form>
        )
    }
}
