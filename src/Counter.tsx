

import React, { useState } from 'react'




const Counter = (props:{initialCount : number}) => {
    const [count,setCount]=useState<number>(props.initialCount)



const increment=()=>setCount(count + 1)

const decrement=()=>setCount(count - 1)

  return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

    </div>
  )
}

export default Counter