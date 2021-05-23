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

    
}