import react from 'react'
import ReactDOM from 'react-dom'

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="/react-logo.png" alt="not working"/>
        </nav>
      </header>
      <ol>
        <li>reason 1</li>
        <li>reason 2</li>
        <li>reason 3</li>
      </ol>
    </div>
  )
}


ReactDOM.render(< Page />, document.getElementById('root'))
