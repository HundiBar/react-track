import react from 'react'
import ReactDOM from 'react-dom'

function MainContent() {
  return (
    <div className="main-content">
      <h1>Reasons im excited to learn React</h1>
      <ol>
        <li>reason 1</li>
        <li>reason 2</li>
        <li>reason 3</li>
      </ol>
    </div>
  )
}

function Footer() {
  return (
    <footer>© 2021 Abbott development. All rights reserved.</footer>
  )
}

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src="images/react-logo.png" alt="not working"/>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Page() {
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>

    </div>
  )
}

ReactDOM.render(< Page />, document.getElementById('root'))
