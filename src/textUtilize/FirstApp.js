import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { toUpper, toLower, toCopy, removeSpace, reverse, jsonstring, convertStringToJson } from "../Redux/reducer";


const Myapp = (props) => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const data = useSelector(state => state.letter)
    useEffect(() => {
        setText(data)
    }, [data])
    const toUpperCase = () => {
        dispatch(toUpper(text))
        props.showAlert("Converted to uppercase ", "success")
    }
    const Lowercase = () => {
        dispatch(toLower(text))
        props.showAlert("Converted to lowercase ", "success")
    }
    const copyText = () => {
        props.showAlert("Copied successully", "success")
        dispatch(toCopy(text))

    }
    const reset = () => {
        if (window.confirm("Are you want to clear text")) {
            setText('')
            props.showAlert("Reset ", "success")
        }
        else { }
    }
    const Spaces = () => {
        dispatch(removeSpace(text))
        props.showAlert("Extra space removed ", "success")
    }
    const revers = () => {
        dispatch(reverse(text))
        props.showAlert("Reversed ", "success");
    }
    const jsonString = () => {
        dispatch(jsonstring(text))
        props.showAlert("Converted to String", "success");
    }
    const stringjson = () => {
        dispatch(convertStringToJson(text))
        props.showAlert("Converted to object ", "success");
    }

    return (
        <>
            <div className="textutils mx-4 " style={{}}>
                <h1>Enter text Here</h1>
                <textarea id="myBox" className="col-20" value={text} onChange={(event) => setText(event.target.value)}></textarea>
                <button className="btn btn-primary mx-2 my-2  " disabled={text.length === 0} onClick={toUpperCase}>Uppercase</button>
                <button className="btn btn-success mx-2 my-2 " disabled={text.length === 0} onClick={Lowercase}>Lowercase</button>
                <button className="btn btn-success mx-2 my-2 " disabled={text.length === 0} onClick={copyText}>Copy to Clipboard</button>
                <button className="btn btn-dark mx-2 my-2 " disabled={text.length === 0} onClick={Spaces}>Remove Extra Spaces </button>
                <button className="btn btn-danger mx-2 my-2 " disabled={text.length === 0} onClick={reset}>Reset</button>
                <button className="btn btn-danger mx-2 my-2 " disabled={text.length === 0} onClick={revers}>Reverse</button>
                <button className="btn btn-danger mx-2 my-2 " disabled={text.length === 0} onClick={jsonString}>JSON String</button>
                <button className="btn btn-danger mx-2 my-2 " disabled={text.length === 0} onClick={stringjson}>String to JSON</button>

            </div>
            <div className="container my-5" style={{position:"relative",top:"100px"}} >
                <h2>Text Summary:</h2>
                <h5>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} character</h5>
                <h3>Preview:</h3>
                <h5>{text}</h5>
            </div>
        </>
    )
}
export default Myapp;