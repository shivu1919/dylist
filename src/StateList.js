import React, { useState } from 'react'

function StateList() {

    const[color, setColor] = useState(["Black"])

    function AddColor(){
        let col = document.getElementById('inp').value
        if(col!=''){
            setColor([...color, col])
            document.getElementById('inp').value=''
        }
        else{
            alert('please enter color name')
        }
        
    }

    function DeleteItem(){
        setColor(color.slice(0,-1))
    }

  return (
    <div>
        <center>
        <input type='text' id='inp'></input>
        <br />
        <button onClick={AddColor}>Add Color</button>

        {color.map(x=> <li>{x}</li>)}

        <button onClick={DeleteItem}>Delete Item</button>
        </center>
        
    </div>
  )
}

export default StateList