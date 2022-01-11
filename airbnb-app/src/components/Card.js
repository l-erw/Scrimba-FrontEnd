// import React from "react"
import StarImg from "../images/star.png"

export default function Card(props) {
    return (
  
        <div className="card">
            <img className="card--image" src={`../images/${props.item.coverImg}`} alt="experience"/>
            <div className="card--stats">
                <img className="card--star" src={StarImg} alt="star"/>
                <p>{props.item.stats.rating}</p>
                <p className="grey-text">({props.item.stats.reviewCount}) • </p>
                <p className="grey-text">{props.item.location}</p>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p><strong>${props.item.price}</strong> / person</p>
        </div>
    )
}
