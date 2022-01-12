import React from "react"
import MapMarker from "../map-marker.png"
import MountFuji from "../mount-fuji.jpg"

export default function Card() {
    return (
        <section>
            <div className="card">
                <div>
                <img className="card--image" src={MountFuji} alt="Mount Fuji"/>
                </div>
            
                <div className="layout-test">
                    <div className="card--data">
                        <img src={MapMarker} alt="map marker dot"/>
                        <p>Location</p>
                        <a href="maps.google.com">View on Google Maps</a>
                    </div>
                    
                    <div className="card--content">
                        <h2>Card Title</h2>
                        <p>Card dates</p>
                        <p>Card description</p>
                    </div>
                </div>
            </div>

        </section>

    )

}
