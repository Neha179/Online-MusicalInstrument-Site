import axios from 'axios'

const USER_REST_API_URL="http://localhost:8870/users";

class UserService{

    updateProfile(user) {
        return axios.post(USER_REST_API_URL+"/profile/update",user);
      }
}

export default new UserService()