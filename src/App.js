import React from 'react'
import ArrayList from './ArrayList'
import ObjectList from './ObjectList'
import List from './indexList'
import ListState from './StateList'
import Count from './Count'

import Counter from './Counter'

function App() {
  return (
    <>
    <h1>Count value from class based Component</h1>
     <Counter />

     <h1>Count value from Functional component</h1>
     <Count />
    </>
  )
}

export default App