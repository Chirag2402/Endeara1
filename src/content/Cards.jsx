import React from 'react' 
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className ="products">
        
        <div className ="product">
            <div className="productimg">
          <img src={props.img} alt="" />
          </div>
          <h3 id="Prods">{props.title}</h3>
          <p id="Prods">{props.price}</p>
          <a href="add2cart.html"><button>Add to Cart</button></a>
        </div>
    </div>
  )
}

export default Cards
