import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App(){
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')
  const [showNavbar, setShowNavbar] = useState(true)
  const [color, setcolor] = useState(0)
  
  useEffect(() => {
    alert("count was changed / particular render for particular change")
    setcolor(color + 1)
  }, [count])

  
  
  
  return (
    <>
    <button onClick={() => setShowNavbar(false)}>Remove Navbar</button>
    {showNavbar && <Navbar color={"navy " + "blue " + color}/>}
      <div>The count is {count}</div>
      <input type="number" value={input} onChange={(e) =>{
        const value = Number(e.target.value) // for converting string into number and input doesn't immediately change so taking event value
        setInput(value)
        setCount(value)
      } } />
    </>
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const [input, setInput] = useState('')

//   return (
//     <>
//       <div>The count is {count}</div>
//       <input type="number" value={input} onChange={(e) =>{
//         const value = Number(e.target.value) // for converting string into number and input doesn't immediately change so taking event value
//         setInput(value)
//         setCount(value)
//       } } />
//     </>
//   )
// }

// export default App
