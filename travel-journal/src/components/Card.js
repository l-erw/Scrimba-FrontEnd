import React from "react"
import MapMarker from "../map-marker.png"


export default function Card(props) {
    return (
        <section>
            <div className="card">
                <div>
                    <img className="card--image" src={`../images/${props.item.image}`} alt={props.item.title}/>
                </div>
            
                <div className="card--text">
                    <div className="card--data">
                        <img src={MapMarker} alt="map marker dot"/>
                        <p className="card--location">{props.item.location}</p>
                        <a className="card--link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    
                    <div className="card--main-content">
                        <h2>{props.item.title}</h2>
                        <p className="card--dates">{props.item.startDate} - {props.item.endDate}</p>
                        <p className="card--description">{props.item.description}</p>
                    </div>
                </div>
            </div>
            </section>
    )

}
