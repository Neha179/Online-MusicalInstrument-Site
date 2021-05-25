//Authors : Aakansha , Monalisa 
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
        <table className='tableitems-all'>
          <thead>
            <tr>
              <th className='header-all'>ID</th>
              <th className='header-all'>Name</th>
              <th className='header-all'>Price</th>
              <th className='header-all'>Stock</th>
              <th className='header-all'>Category</th>
              <th className='header-all'>Color</th>
              <th className='header-all'>Brand</th>
              <th className='header-all'>Size</th>
              <th className='header-all'>Body Material</th>
              <th className='header-all'>String Material</th>
            </tr>
          </thead>
            <tbody>
            {

              this.state.products.map(
                prod =>
                <tr >
                <td className='data-all'>{prod.pid}</td>
                <td className='data-all'>{prod.productName}</td>
                <td className='data-all'>{prod.price}</td>
                <td className='data-all'>{prod.stock}</td>
                <td className='data-all'>{prod.category}</td>
                <td className='data-all'>{prod.colour}</td>
                <td className='data-all'>{prod.brand}</td>
                <td className='data-all'>{prod.size}</td>
                <td className='data-all'>{prod.bodyMaterial}</td>
                <td className='data-all'>{prod.stringMaterial}</td>

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
