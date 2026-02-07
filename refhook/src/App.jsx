import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef()

  useEffect(() => {
    // a.current = a.current + 1
    // console.log(`Rendering and the value of a is ${a.current}`);
    let random = () => {
      let val1 = Math.ceil(1 + Math.random() * 255)
      let val2 = Math.ceil(1 + Math.random() * 255)
      let val3 = Math.ceil(1 + Math.random() * 255)
      return `rgb(${val1}, ${val2}, ${val3})`
    }
    ref.current.style.backgroundColor = random()
    
  })

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
      <div className="card">
        <button ref={ref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
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
