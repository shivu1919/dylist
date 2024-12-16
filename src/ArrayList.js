import React from 'react'

function ArrayList() {

    const fruits=["Apple","Banana","Papaya","Date","Apple"]

  return (
    <>
        <div>
          {fruits.map(x=><li key={x}>{x}</li>)}
        </div>
    </>
  )
}

export default ArrayList