import ImageName from "/images/Logo.png"
import "./Navbar.css"
import cart from "/public/Cart.svg"
import wish from "/public/Wish.svg"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
       <div className="logo">
          <NavLink to="/"><img  src={ImageName} alt="Store Logo" /></NavLink> {/* Link back to the main page */}
        </div>
        <div className="menu">
          <div className="navigation">
           <NavLink className={(e)=> {return e.isActive ? "act" : "nonact"}} to="/">Home</NavLink> {/* Link back to the main page */}
           <NavLink className={(e)=> {return e.isActive ? "act" : "nonact"}} to="/about">About</NavLink>
           <NavLink className={(e)=> {return e.isActive ? "act" : "nonact"}} to="/contact">Contact</NavLink>
          </div>
          <div className="AddCart">
            <a href="cart.html"><img className="wish" width="25px" src= {cart} alt="" /></a>
            <a href="wishlist.html"><img className="wish" width="25px" src= {wish} alt="" /></a>
          </div>
        </div>
    </div>
  )
}

export default Navbar