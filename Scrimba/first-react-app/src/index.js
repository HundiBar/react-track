import react from 'react'
import ReactDOM from 'react-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"

function App() {
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>

    </div>
  )
}

ReactDOM.render(< App />, document.getElementById('root'))
