import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setProduct(res.data))

  }, [id])
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top p-3"
        style={{ height: 250, objectFit: 'contain' }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-truncate">{product.description}</p>
        <p className="card-text text-truncate">{product.category}</p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <span className="fw-bold">${product.price}</span>
        <button className="btn btn-primary btn-sm" to={`#`}>Compra</button>
      </div>
    </div>
  )
}

export default ProductDetail
