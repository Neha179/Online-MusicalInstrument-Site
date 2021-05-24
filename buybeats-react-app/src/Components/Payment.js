import React, { Component } from 'react';
import logo from '../Images/payment-logo.jpg'
import Button from './Button'
import '../CSS/Payment.css'
import {withRouter} from "react-router-dom";
import OrderService from '../Services/OrderService';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.service=new OrderService();
        this.state = {
          cardNumber:'',
          cvv:'',
          expDate:'',
            onpress:''
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
        this.props.history.push({pathname:"/cart"})
        
    }

    onSave(e) {
        e.preventDefault();
        this.setState({onpress:"pressed"});
        this.service.placeOrder().then(res=>{
           console.log(res.data);
           localStorage.setItem("oid",res.data.oid);
           localStorage.setItem("totalAmount",res.data.totalAmount);
           
           this.props.history.push("/confirmOrder");
          
        });
    }

    render () {
        return (
          <div className="payment">
              <center><div className="box">
                  <h1 className="bigblue">Payment Portal</h1>
                  <img src={logo} className="payment-logo" align="left"/>
            <form onSubmit={(e) => this.onSave(e)}>
            <table className="jumbotron">
                <br />
                <tr><td className="control-label">Card Number</td>
                    <td><input className="inputs" name="cardNumber" value={this.state.cardNumber} placeholder="Enter 16 Digit card number" pattern="[1-9][0-9]{15}" required onChange={this.handleInput} /></td></tr>
                <br/>
                <tr><td className="control-label">CVV</td>
                    <td><input className="inputs" type="password"name="cvv" value={this.state.cvv} placeholder="***" pattern="[0-9]{3}" required onChange={this.handleInput} /></td></tr>
                <br/>
                <tr><td className="control-label">Expiry Date</td>
                    <td><input className="inputs" name="expDate" value={this.state.expDate} placeholder="MM/YYYY" pattern= "(0[1-9]|10|11|12)/20[2-9][1-9]$" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td><Button buttonStyle={"btn--danger--solid"} 
            buttonSize={"btn--large"}  type="submit">Proceed</Button></td>
                    <td><Button buttonStyle={"btn--danger--solid"} 
            buttonSize={"btn--large"} 
            onClick={() => this.onCancel()}>Cancel Payment</Button></td></tr>
            {this.state.onpress=="pressed"&&<tr><td>Please wait..</td></tr>}
            </table>
            
            </form></div></center>
            </div>
        )
    }
}
export default withRouter(Payment);

