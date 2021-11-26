import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      // use info from data.js to set props.
    </div>
  )
}
