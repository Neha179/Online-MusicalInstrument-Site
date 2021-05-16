import axios from 'axios'

const USER_HOME_REST_API_URL="http://localhost:8870/home";

class ProductSearchService{

    getProducts(prod){
      return axios.get(USER_HOME_REST_API_URL+"/search/"+prod);
    }
}

export default new ProductSearchService()
