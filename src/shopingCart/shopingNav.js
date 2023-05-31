import { Link } from "react-router-dom";

const ShopingNav=()=>{
    return(<>
    <ul className="nav justify-content-end  fixed-top my-1 bg-warning" style={{height:"50px",color:"black"}}>
  <li className="nav-item">
    <Link className="nav-link text-dark" to="/shop"><i className="fa-solid fa-house fa-lg"></i></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active text-dark" aria-current="page" to="/cart" ><i className="fa-sharp fa-solid fa-cart-shopping fa-lg"></i></Link>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark" href="#"><i className="fa-solid  fa-user fa-lg"></i></a>
  </li>
  
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Category</a>
    <select className="dropdown-menu">
      <option className="dropdown-item" >Electronics</option>
      <option className="dropdown-item" href="#">Men's Clothing</option>
      <option className="dropdown-item" href="#">Jewelery</option>
      <option className="dropdown-item" href="#">Woman's Clothing</option>
    </select>
  </li>
</ul>
    </>)}
 export default ShopingNav;