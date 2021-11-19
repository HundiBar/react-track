import react from 'react'
import ReactDOM from 'react-dom'

function Header() {
  return (
    <header>
      <nav>
        <img src="images/react-logo.png" alt="not working" width="40px" />
      </nav>
    </header>
  )
}

function Page() {
  return (
    <div>
      <Header/>
      <h1>Reasons im excited to learn React</h1>
      <ol>
        <li>reason 1</li>
        <li>reason 2</li>
        <li>reason 3</li>
      </ol>
      <footer>© 2021 Abbott development. All rights reserved.</footer>
    </div>
  )
}

ReactDOM.render(< Page />, document.getElementById('root'))
