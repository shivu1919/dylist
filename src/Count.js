import React, { useState } from 'react'

function Count() {

    const [count, setCount]= useState(0)

    function Increase(){
        setCount(count+1)
    }

  return (
    <div>
       <h2> {count} </h2> 
       <button onClick={Increase}>Increase</button>
    </div>
  )
}

export default Count