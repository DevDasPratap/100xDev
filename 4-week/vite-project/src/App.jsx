import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [todos, setTodo] = useState(
    [
      {
        title: 'Go to gym',
        description: 'Go to gym from 7-9',
        completed: false
      },
      {
        title: 'Study JS',
        description: 'Study JS from 9-10',
        completed: true
      }
    ]
  )
// addTodo
function addTodo() {
  setTodo(
    [
      ...todos,
      {
        title: 'new Todo',
        description: 'Desc of new todo'
      }
    ]
  )
}
  return (
    <>
      {/* <div>
        <button onClick={()=> setCount((count)=>count+1)}>
          count is {count}
        </button>
      </div> */}


      {/* <div>
        <CustomButton count={count * 10} setCount={setCount}></CustomButton>
        <CustomButton count={count - 10} setCount={setCount}></CustomButton>
        <CustomButton count={count + 10} setCount={setCount}></CustomButton>
      </div> */}

      {/* todos */}
      <div>
        {/* {JSON.stringify(todos)} */}
        {/* <Todo title={todos[0].title} description={todos[0].description} completed={todos[0].completed}></Todo> */}

        {todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description} completed={todo.completed}></Todo>
        })}

        <button onClick={addTodo}>Add a random todo</button>
      </div>

    </>
  )
}
// todos
function Todo(props) { //props => property
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <h3>{props.completed}</h3>
  </div>
}


// component 
function CustomButton(props) {
  function onClickCount() {
    props.setCount(props.count + 1)
  }
  return <button onClick={onClickCount}>
    Counter {props.count}
  </button>
}

export default App