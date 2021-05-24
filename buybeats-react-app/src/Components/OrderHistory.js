import { Component } from "react";
import { withRouter } from "react-router";
import OrderService from "../Services/OrderService";
import OrderDetails from "./OrderDetails";

class OrderHistory extends Component{
    constructor(props){

        super(props);
        this.service=new OrderService();
        this.state={
          orders:[],
          showDetails:false,
          selectedOrder:null
        }
    }

    componentDidMount(){
        console.log("order compo");
         this.service.viewOrders().then(res=>{
            console.log(res.data);
            this.setState({orders:res.data})
         });
    }

    onSelect = (x) => {
        this.setState({
        showDetails: true,
        selectedOrder:x
        });
        localStorage.setItem("oid",x.oid);
    }


    render(){
        return(
            <>
            <ul className="select">
                    {this.state.orders.map((x) => 
                    <li style={{"display" : "list-item"}} key={x.oid}
                        class="list-group-item">
                            <table>
                                <tr><td>Total Amount ₹ : {x.totalAmount}</td></tr>
                                <tr><td>Date & Time : {x.dateTime.substring(0,10)}</td></tr>
                                <tr><td>Payment Status : {x.paymentStatus}</td></tr>
                                <br/>
                            </table>
                            </li>)}
                    
                    </ul>

                    {   
                    this.state.showDetails && this.state.selectedOrder &&
                    <OrderDetails orderDetails={this.state.selectedOrder} />
                }
            
            </>
        );
    }
    
}

// export default withRouter (OrderHistory);
export default OrderHistory;