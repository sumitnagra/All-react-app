import { useContext, useState } from "react"
import { ShopContext } from "./shopContex"

const Shop = (props) => {
  const { addTocart } = useContext(ShopContext);
  const [isClicked, setIsClicked] = useState(false);
  const adding = () => {
    setIsClicked(true)
    addTocart(props.id)

  }

  return (<>
    <div className="container my-5" data-aos="fade-up">
      <div className="card cardWidth">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-text">Price:{props.price}$</div>
          <div className="card-text ">Rating:{props.rating.rate}</div>
          <div className="card-text ">Count:{props.rating.count}</div>

          <button className={`cart-button ${isClicked ? 'clicked' : ''}`} onClick={adding}>
            <span class="add-to-cart">Add to cart</span>
            <span class="added">Added</span>
            <i class="fas fa-shopping-cart"></i>
            <i class="fas fa-box"></i>
          </button>
          <span className="btn btn-warning  btnwidth">Buy Now</span>
        </div>
      </div>
    </div>
  </>)
}

export default Shop