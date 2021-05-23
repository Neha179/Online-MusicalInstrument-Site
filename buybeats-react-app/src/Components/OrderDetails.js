import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';
import OrderService from '../Services/OrderService';


class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.service=new OrderService();
        this.state={
            orderDetails:[]
        }
    }

    componentDidMount(){
         this.service.viewOrderDetails().then(res=>{
          this.setState({orderDetails:res.data});
          console.log(" data "+res.data.orderDetails);
         });
    }

    

    render() {
        return (
            <div>
                
                
                {/* <ul className="select">
                    {this.state.ordersDetails.map((x) => 
                    <li style={{"display" : "list-item"}} key={x.odid} 
                        class="list-group-item">
                            <table>
                                <tr><td>Pname  : {x.orderDetails.product.productName}</td></tr>
                                <tr><td>Price : {x.orderDetails.price}</td></tr>
                                
                                <br/>
                            </table>
                            </li>)}
                    
                    </ul>
                
             */}
            </div>
        )
    }
}

export default withRouter (OrderDetails);