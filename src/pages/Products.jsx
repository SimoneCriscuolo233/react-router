import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProduct(res.data));
  }, []);



  return (
    <>

      <div className='container my-5'>
        <h1 className="mb-4">Prodotti</h1>
        <div className="row g-4">
          {product.map((p) => (
            <div key={p.id} className="col-lg-3 col-md-4 col-12">
              <div className="card h-100 shadow-sm">
                <img
                  src={p.image}
                  alt={p.title}
                  className="card-img-top p-3"
                  style={{ height: 250, objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text text-truncate">{p.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <span className="fw-bold">${p.price}</span>
                  <Link className="btn btn-primary btn-sm" to={`/products/${p.id}`}>Compra</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products
