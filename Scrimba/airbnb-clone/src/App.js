import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  const cards = data.map(item => {
    return (
      < Card
        // use key as something unique to be able to pass the props
        key={item.id}
        item={item}
        //ES6 spread syntax. Takes property of data, set separate prop for each for us.
        // {...item} here and in card, props.coverImg again instead of props.item.coverImg
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}
