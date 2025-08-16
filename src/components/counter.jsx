import React, { useState } from 'react'
import './Counter.css'

const counter = () => {
    const [count, setcount] = useState(0);
  return (
    <div className='counter-container'>
      <p id='para'>You Have Clicked {count} Times</p>
      <button id='btn' onClick={() => { setcount (count + 1) } }>Click me</button>
    </div>
  )
}

export default counter
