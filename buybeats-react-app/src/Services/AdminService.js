import axios from 'axios'

const ADMIN_HOME_REST_API_URL="http://localhost:8870/admin";

class AdminService{

    getProducts(){
      return axios.get(ADMIN_HOME_REST_API_URL+"/home");
    }
}

export default new AdminService()
