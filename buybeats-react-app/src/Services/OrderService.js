import axios from "axios";

export default class OrderService {
    constructor() {
        this.uri = "http://localhost:8870/order" ;
        this.addresses = [];
    }


    getAddresses() {
        const uid =JSON.parse(localStorage.getItem("user")).uid;
        return axios.get(this.uri+"/viewAddress/"+uid);
    }

    confirmation(oid,code){
        
        return axios.get(this.uri+"/confirmOrder/"+oid+"?code="+code);
    }

    placeOrder(){
        const uid =JSON.parse(localStorage.getItem("user")).uid;
        const aid=localStorage.getItem("aid");
        return axios.get(this.uri+"/placeOrder/"+aid+"?uid="+uid);
    }

    viewOrders(){
        const uid =JSON.parse(localStorage.getItem("user")).uid;
        return axios.get(this.uri+"/viewOrders/"+uid);

    }

    viewOrderDetails(){
        const oid=localStorage.getItem("oid");
        return axios.get(this.uri+"/viewOrderDetails/"+oid);
    }
}