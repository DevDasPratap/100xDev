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
// import React, { Fragment, useState } from "react"
// let counter = 4
// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id:1,
//       title: 'a',
//       description:'aaaa'
//     },
//     {
//       id:2,
//       title: 'b',
//       description:'bbbbbb'
//     },
//     {
//       id:3,
//       title: 'c',
//       description:'cccccc'
//     }
//   ])
//   function addTodo() {
//     setTodos([...todos, {
//       id: counter++,
//     title: Math.random(),
//     description: Math.random()
//     }])
//   }
//   return (
//     <div>
//       <button onClick={addTodo}>Add Todo</button>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} ></Todo>)}
//     </div>
//   )
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h5>
//       {description}
//     </h5>
//   </div>
// }

// wrapper component
// function App() {
//   return <div>
//   <CardWrapper innerComponnet={<TextComponent/>}></CardWrapper>
//   <CardWrapper innerComponnet={<TextComponentSecond/>}></CardWrapper>
//   </div>
// }

// function CardWrapper({innerComponnet}) {
//   return <div style={{border: '2px solid black', padding: '22px'}}>
//     {innerComponnet}
//   </div>
// }
// function TextComponent() {
//   return <div>
//     Hi there
//   </div>
// }
// function TextComponentSecond() {
//   return <div>
//     Second component
//   </div>
// }

// othwe way wrapper
// function App() {
//   return <div>
//     <CardWrapper>
//       Component 1
//       <CardWrapper>
//         Component inside
//       </CardWrapper>
//     </CardWrapper>
//     <CardWrapper>
//       Component 2
//     </CardWrapper>
//   </div>
// }

// function CardWrapper({ children }) {
//   return <div style={{ border: '2px solid black', padding: '22px' }}>
//     {children}
//   </div>
// }


// use effect
// import React, { Fragment, useEffect, useState } from "react"

// function App() {
//   useEffect(function () {
//     alert('Hi!')
//   }, []) // dependency array

//   return <div>Hi There</div>
// }

// import React, { Fragment, useEffect, useState } from "react"
// let count = 0
// function App() {
//   const [todos, setTodos] = useState([])
//   // useEffect(()=>{
//     setInterval(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then(async function(res) {
//       const getTodo = await res.json()
//       console.log('getTodo', getTodo)
//       setTodos(getTodo)
//     })
//   // }, 1000)
//   }, [])

//   return <div>
//     {/* <button onClick={addTodo}>Add Todo</button> */}
//     {todos.map(todo => <Todo key={todo.id} title={todo.title} completed={todo.completed} ></Todo>)}
//   </div>
// }

// function Todo({id, title, completed}) {
//   return (
//     <div>
//     <h1>{title}</h1>
//     <b> {id} </b>
//     <p> {completed ? "Completed" : "Not Completed"} </p>
//   </div>
//   )
// }

// use effect
// import React, { Fragment, useEffect, useState } from "react"
// import axios from "axios";
// function App() {
//   const [todos, setTodos] = useState([])

//   async function main() {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
//     setTodos(res.data)
//   }

//   useEffect(()=>{
//     main()
//   }, [])

//   return (
//     <>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} completed={todo.completed} ></Todo>)}
//     </>
//   )
// }

// function Todo({title, completed}) {
//   return (
//     <div>
//     <h1>{title}</h1>
//     <p> {completed ? "Completed" : "Not Completed"} </p>
//   </div>
//   )
// }



// use effect
// import React, { Fragment, useEffect, useState } from "react"
// import axios from "axios";

// function App() {
//   const [selectButton, setButtonId] = useState(1)
//   return <div>
//     <button onClick={()=> setButtonId(1)}>1</button>
//     <button onClick={()=> setButtonId(2)}>2</button>
//     <button onClick={()=> setButtonId(3)}>3</button>
//     <button onClick={()=> setButtonId(4)}>4</button>
//     <button onClick={()=> setButtonId(5)}>5</button>
//     <Todo id={selectButton} />
//   </div>
// }

// function Todo({ id }) {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get(`https://jsonplaceholder.typicode.com/todos?id=${id}`)
//       .then((response) => {
//         console.log(response)
//         setTodos(response.data[0])
//       })
//   }, [id])

//   return (
//     <div>
//       {todos ? (
//         <div>
//           <h3>Todo ID: {todos.id}</h3>
//           <p>Title: {todos.title}</p>
//           <p>Completed: {todos.completed ? "Yes" : "No"}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }


import React, { Fragment, useEffect, useMemo, useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)
const [count, setCount] = useState(0)

//using use effect
  useEffect(() => {
    let finalCount = 0
    console.log('effect is called')
    for (let i = 0; i < inputValue; i++) {
      finalCount = finalCount + i
    }
    setCount(finalCount)
  }, [inputValue])

  //using use memo
  // let count = useMemo(() => {
  //   let finalCount = 0
  //   console.log('memo is called')
  //   for (let i = 0; i < inputValue; i++) {
  //     finalCount = finalCount + i
  //   }
  //   return finalCount
  // }, [inputValue])

  return (
    <>
      <input onChange={(e) => setInputValue(e.target.value)} placeholder="Find sum from 1 to n" />
      <br />
      Sum from 1 to {inputValue} is: {count}
      <br />
      <button onClick={() => { setCounter(counter + 1) }}>Counter {counter} </button>
    </>
  )
}

export default App
