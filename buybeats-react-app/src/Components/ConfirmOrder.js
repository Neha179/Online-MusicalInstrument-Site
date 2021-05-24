
import Button from './Button';
import { Component } from "react";
import { withRouter } from "react-router";
import '../CSS/ConfirmOrder.css';
import OrderService from "../Services/OrderService";
 
 



  class ConfirmOrder extends Component{
    constructor(props){
        super(props);
        this.service=new OrderService(); 
    this.state={
         success:""
      }
    }
    handleInput=(e)=>{
        e.preventDefault();
        console.log(e.target.value);
        localStorage.setItem("vcode",e.target.value);
       
    }
    cancelOrder(){
        console.log("cancel");
        this.props.history.push("/cart");
    }
      confirm=(e)=>{
          e.preventDefault();
        
        console.log(localStorage.getItem("vcode"));
        this.setState({success:"verify"});
     this.service.confirmation(localStorage.getItem("oid"),localStorage.getItem("vcode")).then(res=>{
                console.log(res.data);
                if(res.data=="Order successfull")
                {
                  this.setState({success:"success"});
                  setTimeout(() => this.props.history.push('/thank'), 1000);
                }
                else{
                    this.setState({success:"fail"});
                }
        });        
    }
    render(){
        return(
           
            <div id="grad2">
                <br/><br/><br/><br/><br/><br/>
            <center ><form className="alignTexts" onSubmit={this.confirm}>
                <table className="boxDetails">
                    <th><td className="totalText">Total Amount: ₹</td><td>{localStorage.getItem("totalAmount")}</td></th>
                    <tr><td className="designTexts">Verfication code sent to: {localStorage.getItem("user").uid}</td></tr>
                <tr><td className="designTexts"><label>Verfication code :     </label></td>
                <td>
                    <input className="barInput" type="number" name="code" onChange={this.handleInput} required/><br/>
                </td>
                </tr>
                <br/>
                <tr>
                    <td>
                <Button buttonStyle={"btn--primary-solid"} buttonSize={"btn--large"} type="submit" >Confirm Order</Button>
                    </td>
                    <td><div className="alignButtons">
                <Button buttonStyle={"btn--danger-solid"} buttonSize={"btn--large"} onClick={()=>{this.cancelOrder()}} >Cancel Order</Button>
                </div></td>
                </tr>
                </table>
            </form>
            </center>
            <br/><br/>
             <center>   
            {this.state.success=="success"&&<h1>Success</h1>}
            {this.state.success=="fail"&&<h1>Order Fail</h1>}
            {this.state.success=="verify"&&<h4>Verifying..</h4>}
            </center>
            </div>
            
        );
    }
 }

 export default withRouter (ConfirmOrder);