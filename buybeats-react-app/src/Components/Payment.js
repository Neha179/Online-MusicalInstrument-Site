import React, { Component } from 'react';
import logo from '../Images/payment-logo.jpg'
import Button from './Button'
import '../CSS/Payment.css'

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cardNumber:'',
          cvv:'',
          expDate:''
            
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
          <div className="payment">
              <center><div className="box">
                  <h1 className="bigblue">Payment Portal</h1>
                  <img src={logo} className="payment-logo" align="left"/>
            <form onSubmit={() => this.onSave()}>
            <table className="jumbotron">
                <br />
                <tr><td className="control-label">Card Number</td>
                    <td><input name="cardNumber" value={this.state.cardNumber} pattern="[1-9][0-9]{15}" required onChange={this.handleInput} /></td></tr>
                <br/>
                <tr><td className="control-label">CVV</td>
                    <td><input name="cvv" value={this.state.cvv} pattern="[0-9]{3}" required onChange={this.handleInput} /></td></tr>
                <br/>
                <tr><td className="control-label">Expiry Date</td>
                    <td><input name="expDate" value={this.state.expDate} pattern= "(0[1-9]|10|11|12)/20[1-9]{2}$" required onChange={this.handleInput} /></td></tr>
                <br />
                <tr><td><Button class="btn btn-primary" type="submit">Proceed</Button></td>
                    <td><Button class="btn btn-warning" onClick={() => this.onCancel()}>Cancel Payment</Button></td></tr>
            </table>
            </form></div></center>
            </div>
        )
    }
}

