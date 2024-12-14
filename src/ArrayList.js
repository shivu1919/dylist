import React from 'react'

function ArrayList() {

    const fruits=["Apple","Banana","Papaya","Date","Apple"]

  return (
    <>
        <div>
          <ol>
            {fruits.map(x => <li key={x}> {x} </li>)}
          </ol>
            
            
        </div>
    </>
  )
}

export default ArrayList