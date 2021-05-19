import  React from 'react'
import AdminService from '../Services/AdminService'
import Button from './Button'
import '../CSS/ShowProduct.css'


class ShowProduct extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      products : [],
      visibility: false,
      selectedRowId:null,


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
      <form>
        <table className='tableitems'>
          <thead>
            <tr>
              <th className='header'>ID</th>
              <th className='header'>Name</th>
              <th className='header'>Price</th>
              <th className='header'>Stock</th>
              <th className='header'>Category</th>
              <th className='header'>Color</th>
              <th className='header'>Brand</th>
              <th className='header'>Size</th>
              <th className='header'>Body Material</th>
              <th className='header'>Material</th>
              <th className='header'>Update</th>
            </tr>
          </thead>
            <tbody>
            {

              this.state.products.map(
                prod =>
                <tr >
                <td className='data'>{prod.productName}</td>
                <td className='data'>{prod.price}</td>
                <td className='data'>{prod.stock}</td>
                <td className='data'>{prod.category}</td>
                <td className='data'>{prod.color}</td>
                <td className='data'>{prod.brand}</td>
                <td className='data'>{prod.size}</td>
                <td className='data'>{prod.bodyMaterial}</td>
                <td className='data'>{prod.stringMaterial}</td>
                <td><Button>Update</Button></td>

                </tr>
              )
            }
            </tbody>
        </table>

        <h1>{this.selectedRowId}</h1>
        </form>
      </>
    );
  }
}

export default ShowProduct
