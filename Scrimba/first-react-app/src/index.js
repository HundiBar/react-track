import react from 'react'
import ReactDOM from 'react-dom'

const page = (
  <div>
    <img src="images/react-logo.png" alt="react logo" width="40px"></img>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by in Jordan Walke</li>

    </ul>
  </div>
)

ReactDOM.render(page, document.getElementById('root'))
