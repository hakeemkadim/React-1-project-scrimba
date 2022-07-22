import { useState } from 'react'

export default function Navbar() {
    const [count, setCount] = useState(0)
  
    return (
      <nav>
        <div className='logo'>
        <img src="src\assets\react-logo.png" alt="" srcset="" />
       <h3>ReactFacts</h3>
        </div>
        
       <h2>React Course - Project 1</h2>
      </nav>
      
    )
  }

