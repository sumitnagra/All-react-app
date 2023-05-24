import React, { useState } from "react";
import './todo.css'

function App() {
  const [input, setInput] = useState('')
  const [newInput, setNewInput] = useState([])

  const [edit, setEdit] = useState(0)
  const [index, setIndex] = useState(null)

  const Add = () => {
    if (input === '') { }
    else {
      if (edit === 0) {
        setNewInput([...newInput, input])
        setInput('')
      }
      else {
        let oldArr = newInput
        oldArr.splice(index, 1, input)
        setNewInput([...oldArr])
        setInput('')
        setEdit(0)
      }
    }
  }

  const Delete = (index) => {
    let oldArr = newInput
    newInput.splice(index, 1)
    setNewInput([...oldArr]);

  }
  const Edit = (index) => {
    setEdit(1)
    setInput(newInput[index])
    setIndex(index)
  }
const style={
  width:"70%"
}
const listyle={
 
}
  return (
    <>
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <div className="add">
        <input type="text" id="myInput" value={input} onChange={(e) => setInput(e.target.value) } placeholder="Add item" style={style}/>
        <button className="btn btn-dark" onClick={Add}>{edit === 0 ? 'Add' : 'Edit'}</button>
</div>
      </div>
<div className="myUL">
      <ol id="myUL">
      {newInput.map((item, index) =><li key={index}>{item} <i className="fa-solid fa-pen-to-square mx-4" onClick={() => Edit(index)} style={listyle}>
          </i><i className="fa-solid fa-trash right mx-4" onClick={() => Delete(index)}></i></li>) }
      </ol>
      </div>
    </>

  )
}

export default App;
