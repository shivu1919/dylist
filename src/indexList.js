import React from 'react'

function indexList() {
    const colors=["White","Black","Red","Green","Black"]
  return (
    <div>
        {colors.map((items, index)  => <li key={index}>{items}</li>)}
    </div>
  )
}

export default indexList;