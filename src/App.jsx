import React from 'react'
import { useState } from 'react'
console.log("page reload")

const App = () => {
  const [toggle,setToggle] = useState(false)
  const [count,setCount] = useState(0)
  console.log("function reload")
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default App
