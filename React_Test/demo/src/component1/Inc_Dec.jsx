import React,{useState} from 'react'
const Inc_Dec = () => {
    const [count , setCount]= useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Deccrement</button>
    </div>
  )
}

export default Inc_Dec
