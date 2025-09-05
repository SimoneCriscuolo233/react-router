import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';

const Products = () => {

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => console.log(response.data));
    }, []);



  return (
    <>
      <Navbar />
      <div className='container'>
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-top"></div>
              <div className="card-body"></div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Products
