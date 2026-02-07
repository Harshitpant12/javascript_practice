import React from 'react'
import { useEffect } from 'react'

const Navbar = ({color}) => {
    
    useEffect(() => {
        alert("color is changed")
    }, [color])

    useEffect(() => {
       alert("Every Render")
    })
  
    useEffect(() => {
        alert("First Render")
    }, [])

    //Example of CleanUp Function

    useEffect(() => {
        alert("Hey welcome, first render of app.jsx")
        return () => {
            alert("Component was unmounted")
        }
    }, [])

    return (
        <div>
        I am Navbar of {color} color
        </div>
    )
}

export default Navbar
