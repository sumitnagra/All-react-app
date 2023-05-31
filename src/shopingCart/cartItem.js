import { useContext } from "react";
import { ShopContext } from "./shopContex";
const CartItem=(props)=>{
    const {removeFromCart}=useContext(ShopContext)
    return(<>
      <div className="cartItem container my-3 "  data-aos="fade-up">
     
        <img src={props.image} className="cartImage" alt="..." />
        <div >
          <h5 ><b>{props.title}</b></h5>
          <div ><b>Price:</b>{props.price}$</div>
          <div  ><b>Rating:</b>{props.rating.rate}</div>
          <div ><b>Count:</b>{props.rating.count}</div>
          <div  >Description:{props.details}</div>

          <span  className="btn btn-dark mx-2 my-3"  onClick={()=>removeFromCart(props.id)}>Remove from  cart  <i className= "fa-sharp fa-solid fa-cart-shopping"></i></span>
          <span className= "btn btn-warning">Buy Now</span>
        </div>
    </div>

    </>)
}
export default CartItem;