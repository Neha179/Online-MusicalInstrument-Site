import React from "react";
import OrderService from '../Services/OrderService'

export default class ViewAddress extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            address: [],
            selectedAddress: ""
        }
    }
    

    componentDidMount(){
 
        console.log(localStorage.getItem("Uid"));
        OrderService.viewAddress(localStorage.getItem("Uid")).then((response) => {
            return response.json();
        }).
        then(data => {
            let add = data.map(address => {
                return {value: address, display: address};
            });
        
            this.setState({address:[{value: "",display: "(select your address) "}].concat(add)
        });
          }).catch(error => {
            console.log("Address not found")
          });
    }


render() {
    return(
        <div>
            <select value = {this.state.selectedAddress}
            onChange={(e) => this.setState({selectedAddress: e.target.value})}>
                {this.state.address.map((add) => <option key={add.value} value={add.value}></option> )}
            </select>

            {/* // value={this.state.selectedAddress}
            // onChange={e =>
            //     this.setState({
            //         selectedAddress: e.target.value,
            //         validateError:
            //         e.target.value === "" ? "you must select address or add address"
            //     })

            // }>
            // {
            // this.state.address.map(
            //     add =>
            //     <tr>
            //     <td>{add.aid}</td>
            //     <td>{add.houseNumber}</td>
            //     <td>{add.street}</td>
            //     <td>{add.city}</td>
            //     <td>{add.state}</td>
            //     <td>{add.pincode}</td>
            //     <td>{add.addressType}</td>  
            //     </tr>
            // ) */}
    
        </div>
    );
}
}