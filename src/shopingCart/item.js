import Shop from "./shop"

import ShopingNav from "./shopingNav";
import finalProduct from "./product";
const Items = (props) => {
       return (<>
        <ShopingNav />
        <div className="d-flex row"  >
            {
                finalProduct.map((element) =>
                    <div className="col-md-3" key={element.id}>
                        <Shop image={element.image} title={element.title} details={element.description} price={element.price} rating={element.rating} category={element.category} id={element.id} />
                    </div>
                )
            }
        </div>


    </>)
}

export default Items;