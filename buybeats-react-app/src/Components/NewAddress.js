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
            <table className="jumbotron">
                <tr><td className="control-label">House Number</td>
                    <td><input className="inputs" name="houseNumber"  value={this.state.houseNumber} pattern="[A-Z][a-zA-Z\s]*([\d]*)\/?([\d]*)?" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td className="control-label">Street</td>
                    <td><input className="inputs"  name="street"  value={this.state.street} pattern="[A-Z][a-zA-Z\s]*([\d]*)\/?([\d]*)?" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td className="control-label">City</td>
                    <td><input className="inputs" name="city"  value={this.state.city} pattern="[A-Z][a-z]{3,}" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td className="control-label">State</td>
                    <td><input className="inputs" name="state"  value={this.state.state} pattern="[A-Z][a-z]{4,}" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td className="control-label">PIN</td>
                    <td><input className="inputs" name="pinCode"  value={this.state.pinCode} pattern="[0-9]{6}" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td className="control-label">Address Type</td>
                
                {/* <select className="control-label" value={this.state.addressType} required onChange={this.handleInput}>
                    <option>Home</option>
                    <option>Work</option>
                </select> */}
                <select className="inputs" value={this.state.addressType} onChange={this.handleChange}>
                    {this.state.options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                </select>
                    <td></td></tr>
                <br />
                <tr><td><Button buttonStyle={"btn--grey--solid"} 
            buttonSize={"btn--medium"} type="submit">Save Address</Button></td>
                    <td><Button buttonStyle={"btn--grey--solid"} 
            buttonSize={"btn--medium"} onClick={() => this.onCancel()}>Cancel Address</Button></td></tr>
            </table>
            </form></div></center>
            </div>
        )
    }
}
