import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => { if (res.data !== "") { setProduct(res.data) } else { navigate("/products") } })
  }, [id, navigate])

  return (<div className="container">
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
    <div className="d-flex justify-content-between mt-3">
      <button className="btn btn-primary" onClick={() => navigate(`/products/${parseInt(id) - 1}`)} disabled={parseInt(id) <= 1}>
        Prodotto precedente
      </button>
      <button className="btn btn-primary" onClick={() => navigate(`/products/${parseInt(id) + 1}`)}>
        Prodotto successivo
      </button>

    </div>
  </div>
  )
}

export default ProductDetail
