import React, { Component } from 'react';
import '../CSS/NewAddress.css'
import OrderService from '../Services/OrderService.js';
import Button from './Button'





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
            addressType : 'Home',
            options : [
                {
                    label: 'Home', value: 'Home'
                },
                {
                    label: 'Work', value: 'Work'
                }
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

    handleChange=(e)=>{
        this.setState({addressType:e.target.value})
    }
    

    render () {
        return (
            
            <div>
                <center><div className="box">
                <h1 className="bigblue">New Address</h1>
            <form  onSubmit={() => this.onSave()}>
            <table>
                <tr><td className="label-addressForm">House Number</td>
                    <td><input className="inputs-addressForm" name="houseNumber"  value={this.state.houseNumber} pattern="[a-zA-Z1-9]{1,}" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td className="label-addressForm">Street</td>
                    <td><input className="inputs-addressForm"  name="street"  value={this.state.street} pattern="[A-Z][a-zA-Z\s]*([\d]*)\/?([\d]*)?" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td className="label-addressForm">City</td>
                    <td><input className="inputs-addressForm" name="city"  value={this.state.city} pattern="[A-Z][a-z]{4,}" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td className="label-addressForm">State</td>
                    <td><input className="inputs-addressForm" name="state"  value={this.state.state} pattern="[A-Z][a-z]{4,}" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td className="label-addressForm">PIN</td>
                    <td><input className="inputs-addressForm" name="pinCode"  value={this.state.pinCode} pattern="[0-9]{6}" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td className="label-addressForm">Address Type</td>
                
                {/* <select className="control-label" value={this.state.addressType} required onChange={this.handleInput}>
                    <option>Home</option>
                    <option>Work</option>
                </select> */}
                <select className="inputs-addressForm" value={this.state.addressType} onChange={this.handleChange}>
                    {this.state.options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                </select>
                    <td></td></tr>
                <br />
               
                <tr><td><Button buttonStyle={"btn--green--solid"} 
            buttonSize={"btn--large"} type="submit">Save</Button></td>
                    <td><Button buttonStyle={"btn--danger--solid"} 
            buttonSize={"btn--large"} onClick={() => this.onCancel()}>Cancel</Button></td></tr>
            </table>
            </form></div></center>
            </div>
        )
    }
}
