import React from "react";
import OrderService from '../Services/OrderService'
import { withRouter } from "react-router-dom";

class ViewAddress extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cards: []
        }
    }
    
    
    redirect = () => {
        this.props.history.push({pathname:"/addCard"});
    }

    componentDidMount(){
 
        console.log(localStorage.getItem("Email"));
        OrderService.viewCards(localStorage.getItem("Email")).then((response) => {
              console.log(response.data);
            this.setState({cards:response.data})
          }).catch(error => {
            if (error.response.status === 401) console.log(error.response.data.message);
            else console.log("Card not found ");
          });
    }


render() {
    return(
        <div>
            {
            this.state.cards.map(
                card =>
                
                <tr>
                <td>{card.cid}</td>
                <td>{card.cardNumber}</td>
                <td>{card.cvv}</td>
                <td>{card.expDate}</td>                
                <tr>
                    <td>
                       <center><button onClick={this.redirect} >ADD CARD</button></center> 
                    </td>
                </tr>
                
                </tr>
            )
    }
        </div>
    )
}
}
export default withRouter(ViewAddresses);

