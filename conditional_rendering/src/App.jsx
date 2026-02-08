import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "todo 2",
      desc: "I am another todo"
    },
    {
      title: "function",
      desc: "I am a function todo"
    },
  ])

  const Hello = () => {
    return (
      <>
      <div className="hello">
        Hello from this side
      </div>
      </>
    )
  } // just a small component (can be created here also)

  // const Todo = ({todo}) => {
  //   return (
  //     <>
  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>
  //     </>
  //   )
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Hello/>
      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo} />
        return <div key={todo.title}>
          <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
        </div>
      })}
      {showbtn?<button>showBtn is true</button>: <button>showBtn is false</button> }
      {/* {showbtn && <button>You have clicked count</button>} */}
      <div className="card">
        <button onClick={() => setShowbtn(!showbtn)}>
          Toggle showBtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
