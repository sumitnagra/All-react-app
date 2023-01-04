import React, { useState } from "react";

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
  return (
    <>
      <div className="container mt-3">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add item" />
        <button className="btn btn-success mx-2" onClick={Add}>{edit === 0 ? 'Add' : 'Edit'}</button>

        <ol>
          {newInput.map((item, index) => <div key={index}><li>{item} <button className="btn btn-secondary my-2" onClick={() => Edit(index)}>Edit</button>  <button className="btn btn-danger my-2" onClick={() => Delete(index)}>Delete</button></li>
          </div>)}
        </ol>
      </div>
    </>

  )
}

export default App;
