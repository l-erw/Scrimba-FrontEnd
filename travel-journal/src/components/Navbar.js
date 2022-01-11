import React from "react"
import Globe from "../globe.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={Globe} alt="globe"/>
            <h1 className="nav--header">my travel journal.</h1>
        </nav>
    )
    
}