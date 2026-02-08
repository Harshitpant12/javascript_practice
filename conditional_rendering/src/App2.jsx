import React, { useEffect } from 'react'
import { useState } from 'react'

function App2() {
    const [cards, setCards] = useState([])
    
    useEffect(() => {
      async function fetchData(){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok) throw new Error("Network Error")
            const val = await response.json()
            setCards(val)
        }
      fetchData()
    }, [])
    

    

  return (
    cards.map(card => {
        return (
        <div key={card.id} style={{border: "2px solid black", margin:"20px", padding:"20px" }}>
        <h1>{card.title}</h1>
        <p>{card.body}</p>
    </div>
    )})
  )
}

export default App2
