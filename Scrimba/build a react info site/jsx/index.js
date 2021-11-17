// const h1 = document.createElement("h1")
// h1.textContent = "Hellow Dave"
// h1.className = "header"
// document.getElementById('root').append(h1)

// JSX

const element = <h1 className="header">This is JSX</h1>
console.log(element)

ReactDOM.render(
    element,
    document.getElementById("root")
)
