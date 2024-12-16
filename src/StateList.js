import React, { useState } from 'react'

function StateList() {

  const[color, setColor] = useState(["black","white"])

  function Green(){
    setColor([...color,"Green"])
  }

  function Orange(){
    setColor([...color, "Orange"])
  }

  function RemoveItem(){

  }

  return (
    <div>
        <button onClick={Green}>Add Green</button>
        <button onClick={Orange}>Add Orange</button>
        <br />
        <button onClick={RemoveItem}>Remove Last item</button>
        {color.map((x,index)=> <li key={index}>{x}</li>)}
    </div>
  )
}

export default StateList;