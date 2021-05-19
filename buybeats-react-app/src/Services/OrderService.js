import axios from 'axios'

const Order_REST_API_URL="http://localhost:8870/order";

class OrderService{

    viewAddress(uid){
        return axios.get(Order_REST_API_URL+"/viewAddress/"+uid);
    }
}

export default new OrderService()