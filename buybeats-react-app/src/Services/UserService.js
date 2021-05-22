import axios from 'axios'

const USER_REST_API_URL="http://localhost:8870/users";

class UserService{

    updateProfile(user) {
        return axios.post(USER_REST_API_URL+"/profile/update",user);
      }

    saveAddress(address) {
      const email =JSON.parse(localStorage.getItem("user")).email;
      return axios.post(USER_REST_API_URL+"/addAddress/"+email,address);
    }
}

export default new UserService()