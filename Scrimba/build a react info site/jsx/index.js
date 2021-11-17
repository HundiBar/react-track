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

const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
)

ReactDOM.render(
    page,
    document.getElementById("root")
)
