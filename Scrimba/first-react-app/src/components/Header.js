import react from "react"

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src="images/react-logo.png" alt="not working" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
