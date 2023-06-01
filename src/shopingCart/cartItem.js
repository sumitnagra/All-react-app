import { useContext ,useState} from "react";
import { ShopContext } from "./shopContex";
const CartItem=(props)=>{
  const [quanity,setQuanity]=useState(1)
  
    const {removeFromCart}=useContext(ShopContext)
    const decrement=()=>{
      if(quanity===1){}
      else{
        setQuanity(quanity-1)
      }
    }
    return(<>
      <div className="cartItem container my-3 "  data-aos="fade-up">
     
        <img src={props.image} className="cartImage" alt="..." />
        <div >
          <h5 ><b>{props.title}</b></h5>
          <div ><b>Price:</b> {props.price}$</div>
          <div  ><b>Rating:</b> {props.rating.rate}</div>
          <div ><b>Count:</b> {props.rating.count}</div>
          <div ><b>Description:</b> {props.details}</div>
          <div className="my-2" ><b>Quantity:<button className="btn btn-warning btn-sm mx-4" onClick={()=>setQuanity(quanity+1)} style={{fontSize:"20px"}}> + </button><span><b>{quanity}</b></span><button className="btn btn-warning btn-sm mx-4" onClick={decrement} style={{fontSize:"20px"}}> - </button></b></div>
          <div><b>Total Amount = {quanity*props.price}$</b></div>

          <span  className="btn btn-dark mx-2 my-3"  onClick={()=>removeFromCart(props.id)}>Remove from  cart  <i className= "fa-sharp fa-solid fa-cart-shopping"></i></span>
          <span className= "btn btn-warning">Buy Now</span>
        </div>
    </div>

    </>)
}
export default CartItem;