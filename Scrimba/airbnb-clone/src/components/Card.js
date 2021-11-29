import React from "react";

export default function Card(props) {

  return (
    <div className="card">
      <div className="card--badge">SOLD OUT</div>
      <img src={`../images/${props.img}`} alt="No Katie" className="card--image"/>
      <div className="card--stats">
        <img src="../images/star.png" alt="no star" className="card--star"/>
        <span className="gray">({props.rating})</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span>{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>

    </div>
  )
}
