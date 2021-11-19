import react from 'react'
import ReactDOM from 'react-dom'

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="/react-logo.png" alt="not working" width="40px"/>
        </nav>
      </header>
      <h1>Reasons im excited to learn React</h1>
      <ol>
        <li>reason 1</li>
        <li>reason 2</li>
        <li>reason 3</li>
      </ol>
      <footer>"© 2021 Abbott development. All rights reserved."</footer>
    </div>
  )
}


ReactDOM.render(< Page />, document.getElementById('root'))
