// react return
// function App() {
//   return (
//       <>
//           <Headers title="header 1"></Headers>
//           <Headers title="header 2"></Headers>
//       </>
//   )
// }

// // function Headers({title}) { //destructure title
// //   return (
// //     <div>
// //       {title}
// //     </div>
// //   )
// // }
// function Headers(prop) {
//   return (
//     <div>
//       {prop.title}
//     </div>
//   )
// }



// // react rerender
// import React, { Fragment, useState } from "react"

// function App() {

//   return (
//     // <Fragment>
//     //   <Headers title={title}></Headers>
//     //   <Headers title="header 2"></Headers>
//     // </Fragment>
//     <div>
//       <HeaderWithButton></HeaderWithButton>
//       <Headers title='Header 1'></Headers>
//       <Headers title="header 2"></Headers>
//     </div>
//   )
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState('Header abc')

//   function updateTitle() {
//     setTitle(`My title is: ${Math.random()}`)
//   }
//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Headers title={title}></Headers>
//     </div>
//   )
// }
// function Headers({ title }) {
//   return (
//     <div>
//       {title}
//     </div>
//   )
// }



// use memo

// import React, { Fragment, useState } from "react"

// function App() {

//   return (
//     // <Fragment>
//     //   <Headers title={title}></Headers>
//     //   <Headers title="header 2"></Headers>
//     // </Fragment>
//     <div>
//       <HeaderWithButton></HeaderWithButton>
//       <Headers title='Header 1'></Headers>
//       <Headers title="header 2"></Headers>
//     </div>
//   )
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState('Header abc')

//   function updateTitle() {
//     setTitle(`My title is: ${Math.random()}`)
//   }
//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title}></Header>
//       <Header title={title}></Header>
//       <Header title={title}></Header>
//     </div>
//   )
// }
// function Headers({ title }) {
//   return (
//     <div>
//       {title}
//     </div>
//   )
// }

// const Header = React.memo(Headers)



// todo app
import React, { Fragment, useState } from "react"
let counter = 4
function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      title: 'a',
      description:'aaaa'
    },
    {
      id:2,
      title: 'b',
      description:'bbbbbb'
    },
    {
      id:3,
      title: 'c',
      description:'cccccc'
    }
  ])
  function addTodo() {
    setTodos([...todos, {
      id: counter++,
    title: Math.random(),
    description: Math.random()
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} ></Todo>)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}
export default App
