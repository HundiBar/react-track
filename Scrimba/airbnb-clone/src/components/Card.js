import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img src="../images/katie-zaferes.png" alt="No Katie" className="card--image"/>
      <div className="card--stats">
        <img src="../images/star.png" alt="no star" className="card--star"/>
        <span className="gray">5.0</span>
        <span className="gray">(6) • </span>
        <span>USA</span>
      </div>
      <p>Life Lessons with Katie Zafaeres</p>
      <p><span className="bold">From $136 / person<span/></span></p>
    </div>
  )
}
