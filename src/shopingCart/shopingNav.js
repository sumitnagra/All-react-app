import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState ,useEffect} from "react";
import { useContext } from "react";
import { ShopContext } from "./shopContex";

const ShopingNav = () => {
  const { filterItemsByCategory } = useContext(ShopContext);
  const [selectcategory, setSelectcategory] = useState([])
  const onchange = (e) => {
    setSelectcategory(e.target.value)
    filterItemsByCategory(selectcategory)
  }
  useEffect(() => {
    filterItemsByCategory(selectcategory);
  }, [selectcategory])
  const location = useLocation()
  return (<>
    <ul className="nav justify-content-end  fixed-top  bg-warning" style={{ height: "50px", color: "black" }}>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/shop"><i className={`fa-solid fa-house fa-lg ${location.pathname === "/shop" ? "fa-2xl" : ""}`} ></i></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active text-dark" aria-current="page" to="/cart" ><i className={`fa-sharp fa-solid fa-cart-shopping fa-lg ${location.pathname === "/cart" ? "fa-2xl" : ""}`}></i></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#"><i className="fa-solid  fa-user fa-lg"></i></a>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" role="button" aria-expanded="false">Category</a>
        <select className="dropdown-menu" value={selectcategory} onChange={onchange}>
          <option className="dropdown-item" value={"electronics"} >Electronics</option>
          <option className="dropdown-item" value={"men's clothing"}>Men's Clothing</option>
          <option className="dropdown-item" value={"jewelery"}>Jewelery</option>
          <option className="dropdown-item" value={"women's clothing"} >Woman's Clothing</option>
        </select>
      </li>
    </ul>
  </>)
}
export default ShopingNav;