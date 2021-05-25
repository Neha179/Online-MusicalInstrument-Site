import React, { Component } from 'react';
import OrderService from '../Services/OrderService.js';
import Navbar from './Navbar.js';
import AddressDetails from './AddressDetails.js'
import Button  from './Button';
import NewAddress from './NewAddress.js';
import UserService from '../Services/UserService.js';
import '../CSS/ViewAddress.css'

export default class ViewAddress extends Component {
    constructor(props) {
        super(props);
        this.service = new OrderService();
        this.state = {
            addresses : null,
            selectedAddress : null,
            showDetails : false,
            newAddress : false,
            stat : false
        }
    }

    componentDidMount() {
        this.getAddress();
    }

    getAddress() {
        this.service.getAddresses().then(response => {
            console.log(response);
            if(response.data !="No address found"){
                this.setState({addresses:response.data, stat : true});
            console.log("Component Mount");
            console.log(this.state.addresses);
            }
            else
                this.setState({address:null})

        });
    }

    onSelect = (x) => {
        this.setState({
        showDetails: true,
        selectedAddress:x
        });
    }

    onNewAddress = () => {
        this.clearState();
        this.setState({
            newAddress:true
        });
    }

    onCreateAddress = (address) => {
        this.clearState();
        UserService.saveAddress(address).then(response => {
            this.getAddress();
        });
    }

    onCancel = () => {
        this.clearState();
    }

    clearState() {
        this.setState({
            showDetails:false,
            selectedAddress:null,
            newAddress:null,

        });
    }

    render() {

        return(
            <div className="viewAddressbg">

                <div id="grad1" className="colorcorrector">

                {
                    this.state.stat &&
                    <div >
                        <div className="listShow">
                            <h1 className="labels-listaddress">List of Address</h1>
                        </div>
                    <ul>
                    {this.state.addresses.map((x) =>
                    <li key={x.aid} onClick={() => this.onSelect(x)}
                         ><button className="button-address">House Number : {x.houseNumber}</button></li>)}
                    </ul>
                    </div>
                }
                {
                    !this.state.stat &&
                    <h2 className="noaddress">No address found ! Add one to proceed</h2>
                }
                <br /><br />
                <div className="addnewbutton">
                <Button buttonStyle={"btn--danger-solid"} buttonSize={"btn--large"} onClick={() => this.onNewAddress()  } >Add New Address</Button>
                </div>
                <br />
                <br />
                {
                    this.state.showDetails && this.state.selectedAddress &&
                    < AddressDetails address={this.state.selectedAddress} />
                }
                {
                    this.state.newAddress &&
                    <NewAddress onSubmit={this.onCreateAddress} onCancel={this.onCancel} />
                }
            </div></div>
        )
    }
}
