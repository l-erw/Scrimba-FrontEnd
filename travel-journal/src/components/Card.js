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
                        <p className="card--location">Japan</p>
                        <a className="card--link" href="maps.google.com">View on Google Maps</a>
                    </div>
                    
                    <div className="card--content">
                        <h2>Mount Fuji</h2>
                        <p className="card--dates">12 Jan, 2021 - 24 Jan, 2021</p>
                        <p className="card--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji 
                            is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div>
                <img className="card--image" src={MountFuji} alt="Mount Fuji"/>
                </div>
            
                <div className="layout-test">
                    <div className="card--data">
                        <img src={MapMarker} alt="map marker dot"/>
                        <p className="card--location">Japan</p>
                        <a className="card--link" href="maps.google.com">View on Google Maps</a>
                    </div>
                    
                    <div className="card--content">
                        <h2>Mount Fuji</h2>
                        <p className="card--dates">12 Jan, 2021 - 24 Jan, 2021</p>
                        <p className="card--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji 
                            is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                    </div>
                </div>
            </div>
            
            <div className="card">
                <div>
                <img className="card--image" src={MountFuji} alt="Mount Fuji"/>
                </div>
            
                <div className="layout-test">
                    <div className="card--data">
                        <img src={MapMarker} alt="map marker dot"/>
                        <p className="card--location">Japan</p>
                        <a className="card--link" href="maps.google.com">View on Google Maps</a>
                    </div>
                    
                    <div className="card--content">
                        <h2>Mount Fuji</h2>
                        <p className="card--dates">12 Jan, 2021 - 24 Jan, 2021</p>
                        <p className="card--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji 
                            is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                    </div>
                </div>
            </div>
        </section>

    )

}
