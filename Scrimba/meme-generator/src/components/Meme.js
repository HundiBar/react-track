import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  const getMeme = () => {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))

  const handleChange = (event) => {
      const {name, value} = event.target
  }

  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          className="form--button"
          onClick={getMeme}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="meme--image" alt="not pic"/>
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </main>
  )
}
