import ShopingNav from "./shopingNav"
import { ShopContext } from "./shopContex"
import CartItem from "./cartItem"
import { useContext } from "react"
import finalProduct from "./product"
const Cart = (props) => {
    const { cartItem } = useContext(ShopContext)
    return (<>
        <ShopingNav />

        {
            finalProduct.map((element) => {
                if (cartItem[element.id] !== 0) {
                    return <div className="col-md-2 " key={element.id}>   <CartItem image={element.image} title={element.title} details={element.description} price={element.price} rating={element.rating} category={element.category} id={element.id} />
                    </div>
                }
            }
            )
        }

    </>)
}
export default Cart