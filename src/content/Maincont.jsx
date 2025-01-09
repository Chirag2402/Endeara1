import React from 'react'
import Bann from "/images/Banner1.png"
import "./Maincont.css"

const Maincont = () => {
  return (
    <div>
<section className="banner">
  <div className="bannercontent">
    <div className="scroll-wrapper">
      <div className="scroll-content">
        <img src={Bann} alt="Banner" />
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Maincont
