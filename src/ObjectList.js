import React from 'react'

function ObjectList() {

    const Student=[
        {
            id:1,
            name:"Abc",
            age:20
        },
        {
            id:2,
            name:"bcd",
            age:21
        }
    ]

    const Human = Student.map(x => <li key={x.id}> My id is {x.id} &My name is {x.name} & My age is {x.age}</li>) 

  return (
    <div>
          {Human} 
    </div>
  )
}

export default ObjectList