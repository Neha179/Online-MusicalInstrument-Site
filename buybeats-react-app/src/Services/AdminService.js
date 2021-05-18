import axios from 'axios'

const ADMIN_HOME_REST_API_URL="http://localhost:8870/admin";

class AdminService{

    getProducts(){
      return axios.get(ADMIN_HOME_REST_API_URL+"/home");
    }

    getProductsByName(prodName){
      return axios.get(ADMIN_HOME_REST_API_URL+"/search/product/name/"+prodName);
    }

    getProductByPid(pid){
        return axios.get(ADMIN_HOME_REST_API_URL+"/search/product/"+pid);
      }
}

export default new AdminService()
