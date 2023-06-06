import Shop from "./shop"
import { useContext } from "react";
import ShopingNav from "./shopingNav";
import finalProduct from "./product";
import { ShopContext } from "./shopContex";

const Items = () => {
    const { filteredItems, selectedCategory } = useContext(ShopContext);
    return (<>
        <ShopingNav />

        <div className="d-flex row"  >
            { filteredItems.length > 0
        ? filteredItems.map((element) =>
                <div className="col-md-3" key={element.id}>
                    <Shop image={element.image} title={element.title} details={element.description} price={element.price} rating={element.rating} category={element.category} id={element.id} />
                </div>)
                : finalProduct.map((element) =>
                    <div className="col-md-3" key={element.id}>
                        <Shop image={element.image} title={element.title} details={element.description} price={element.price} rating={element.rating} category={element.category} id={element.id} />
                    </div>
                )}
        </div>


    </>)
}

export default Items;