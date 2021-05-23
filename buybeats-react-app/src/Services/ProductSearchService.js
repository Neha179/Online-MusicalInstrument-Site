import axios from 'axios'

const SHOP_HOME_REST_API_URL="http://localhost:8870/home";



class ProductSearchService{
      constructor(props){
        this.cart=[]
      }

    getProducts(prod){
      return axios.get(SHOP_HOME_REST_API_URL+"/search/"+prod);
    }

    addToCart(pid,cart){
      let uid=JSON.parse(localStorage.getItem("user")).uid;
      console.log(" "+uid);
      return axios.post(SHOP_HOME_REST_API_URL+"/cart/add/"+pid+"?uid="+uid,cart)
    }

   viewCart(){
    let uid=JSON.parse(localStorage.getItem("user")).uid;
      return axios.get(SHOP_HOME_REST_API_URL+"/cart/"+uid)

    }

    removeFromCart(entryId){
      let uid=parseInt(JSON.parse(localStorage.getItem("user")).uid);
      return axios.post(SHOP_HOME_REST_API_URL+"/cart/remove/"+entryId+"?uid="+uid,
      {headers:{
                     'Content-Type': 'application/x-www-form-urlencoded',
                     'Accept': 'application/json'}})
    }

}

export default new ProductSearchService()
