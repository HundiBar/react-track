import React from "react";

export default function Card(props) {
  return (
    // pass props as a parameter
    // use props.(name set in props app.js)
    <div className="card">
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
