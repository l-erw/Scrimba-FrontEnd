import React from "react"

export default function Form() {

    function getMemeImage() {
        console.log("random meme")
    }
    return (
        <main>
            <form>
                <input type="text" id="meme-input-top" aria-label="meme input top" placeholder="text here"/>
                <input type="text" id="meme-input-bottom" aria-label="meme input bottom" placeholder="text here"/>
                <button className="form--btn" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </form>
            <div className="meme--placeholder"></div>
        </main>
        
    )
}