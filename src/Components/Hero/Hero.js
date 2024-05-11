import React from 'react'
import"./Hero.css"
import dark_arrow from"../../assets/dark-arrow.png"
function Hero() {
  return (
    <div className="Hero Container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
     <p>Our cutting-edge curriculum is designed to empower students with the knowlrdge ,skills,and experience needed to excel in the dynamic field of education</p>
     <button className="btn">Explore more<img src={dark_arrow}/></button>
     
      </div>
    </div>
  )
}

export default Hero