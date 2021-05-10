import  React from 'react'
import AdminService from '../Services/AdminService'

class ShowProduct extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      products : []
    }
  }
  componentDidMount(){
    AdminService.getProducts().then((response) => {
      console.log(response.data);
      console.log(response.data[0]);
      this.setState({products:response.data})
    })
   }
  render(){
    return(
      <>
        <table>
            <tbody>
            {
              this.state.products.map(
                products =>
                <tr >
                <td>{products.pid}</td>
                <td>{products.productName}</td>
                </tr>
              )
            }
            </tbody>
        </table>
      </>
    );
  }
}

export default ShowProduct
