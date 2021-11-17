// const h1 = document.createElement("h1")
// h1.textContent = "Hellow Dave"
// h1.className = "header"
// document.getElementById('root').append(h1)

// JSX

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

// Object
// $$typeof: Symbol(react.element)
// key: null
// props:
// children: "This is JSX"
// className: "header"
// [[Prototype]]: Object
// ref: null
// type: "h1"
// _owner: null
// _store: { validated: false }
// _self: null
// _source: null

// ReactDOM.render(
//     element,
//     document.getElementById("root")
// )

//  save all in JSX and call as just a JS object

const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
)

// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

const navbar = (
  <nav>
    <h1> Bob's burgers </h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)
ReactDOM.render(navbar, document.getElementById('root'))
