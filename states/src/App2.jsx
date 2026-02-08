import React from 'react'
import "./App.css"
import { useState } from 'react'

const App2 = () => {
    const [form, setform] = useState({})

    const handleChange = (e) => {
        setform({...form, [e.target.name]:[e.target.value]})
        console.log(form);   
    }

  return (
    <div>
      <input type="text" name='email' value={form.email ? form.email : ""} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone ? form.phone: ""} onChange={handleChange} />
    </div>
  )
}

export default App2
