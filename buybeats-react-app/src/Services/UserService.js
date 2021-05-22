import axios from 'axios'

const User_REST_API_URL="http://localhost:8870/users";

class UserService{

    // login(){
    //   return axios.post(User_REST_API_URL+"/login");
    // }
    addAddress(email){
        return axios.get(User_REST_API_URL+"/addAddress/"+email);
    }
}

export default new UserService()