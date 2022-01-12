import React from "react"
import TrollFace from "../images/Troll-Face.png"

export default function Header() {
    return(
        <header className="header">
            <img src={TrollFace} alt="troll face"/>
            <h1>Meme Generator</h1>
            <h3>React Course - Project 3</h3>

        </header>
    )
}