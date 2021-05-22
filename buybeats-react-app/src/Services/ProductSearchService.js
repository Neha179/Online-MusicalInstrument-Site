import axios from 'axios'

const SHOP_HOME_REST_API_URL="http://localhost:8870/home";

let uid=JSON.parse(localStorage.getItem("user")).uid;

class ProductSearchService{
      constructor(props){
        this.cart=[]
      }

    getProducts(prod){
      return axios.get(SHOP_HOME_REST_API_URL+"/search/"+prod);
    }

    addToCart(pid,cart){
      
      console.log(" "+uid);
      return axios.post(SHOP_HOME_REST_API_URL+"/cart/add/"+pid+"?uid="+uid,cart)
    }

   viewCart(){
      return axios.get(SHOP_HOME_REST_API_URL+"/cart/"+uid).then((response)=>{
        console.log(response)
        console.log(response.data)
        this.cart=response.data
        return this.cart
      }).catch(error =>{
        console.log(error)
      })

    }
}

export default new ProductSearchService()