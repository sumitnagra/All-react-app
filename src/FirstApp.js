import React, { useState } from "react";
const Myapp = (props) => {
    const [text, setText] = useState('')

    const Uppercase = (e) => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase ", "success")
    }
    const Lowercase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase ", "success")

    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied successully", "success")

    }
    const reset = () => {

        if (window.confirm("Are you want to clear text")) {
            setText('')
            props.showAlert("Reset ", "success")
        }
        else { }

    }
    const Spaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert("Extra space removed ", "success")

    }
    return (
        <>
            <div className="container my-5 mx-5 ">
                <h1>Enter text Here</h1>
                <textarea id="myBox" className="col-20" style={{ resize: "none" }} cols={150} rows={10} value={text} onChange={(event) => setText(event.target.value)}></textarea>
                <button className="btn btn-primary mx-2  " disabled={text.length === 0} onClick={Uppercase}>Uppercase</button>
                <button className="btn btn-success mx-2 " disabled={text.length === 0} onClick={Lowercase}>Lowercase</button>
                <button className="btn btn-success mx-2 " disabled={text.length === 0} onClick={copyText}>Copy to Clipboard</button>
                <button className="btn btn-dark mx-2 " disabled={text.length === 0} onClick={Spaces}>Remove Extra Spaces </button>
                <button className="btn btn-danger mx-2 " disabled={text.length === 0} onClick={reset}>Reset</button>

            </div>
            <div className="container my-5">
                <h2>Text Summary:</h2>
                <h5>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} character</h5>
                <h3>Preview:</h3>
                <h5>{text}</h5>
            </div>
        </>
    )
}
export default Myapp;