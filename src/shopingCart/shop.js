import { useContext } from "react"
import { ShopContext } from "./shopContex"

const Shop = (props) => {
  const { addTocart } = useContext(ShopContext);
  
  return (<>
    <div className="container my-5" >
      <div className="card cardWidth">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-text">Price:{props.price}$</div>
          <div className="card-text ">Rating:{props.rating.rate}</div>
          <div className="card-text ">Count:{props.rating.count}</div>

          <span className="btn btn-dark mx-1"  onClick={()=>addTocart(props.id)}> Add to cart  <i className="fa-sharp fa-solid fa-cart-shopping"></i></span>
          <span className="btn btn-warning">Buy Now</span>
        </div>
      </div>
    </div>
  </>)
}

export default Shop