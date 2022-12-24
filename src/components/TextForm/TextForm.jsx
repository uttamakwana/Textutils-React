import React , {useState} from 'react'
import './textform.css';

export default function TextForm(props) {
  const[text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const converToUppercase = () => {
    setText(text.toUpperCase());
    props.showAlert("Text is converted to Uppercase", "success");
    if(text === ""){
    props.showAlert("Enter Something!!", "warning");
  }
  }

  const converToLowercase = () => {
    setText(text.toLowerCase());
    props.showAlert("Text is converted to Lowercase", "success");
    if(text === ""){
    props.showAlert("Enter Something!!", "warning");
  }

  }

  const clearText = () => {
    setText("");
    props.showAlert("Text is cleared!", "success");
    if(text === ""){
    props.showAlert("Enter Something!!", "warning");
  }

  }
  return (
    <>
    <div className="container my-3" style={{color : props.mode ==="dark"? "white" : "black"}}>
        <h1 style={{color : props.mode ==="dark"? "white" : "black"}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="textarea" rows="5" onChange={handleOnChange} placeholder="Enter your text here..." 
            value={text} style={{backgroundColor : props.mode ==="dark"? "grey" : "white",color : props.mode ==="dark"? "white" : "black"}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={converToUppercase}>Convert to Uppercase</button>
        <button className="btn btn-danger" onClick={converToLowercase}>Convert to Lowecase</button>
        <button className="btn btn-success" onClick={clearText}>Clear</button>
        <div className="container">
            <p className='container'>
                {text}
            </p>
        </div>
    </div>
    <div className="container" style={{color : props.mode ==="dark"? "white" : "black"}}>
        <h2 style={{color : props.mode ==="dark"? "white" : "black"}}>Preview</h2>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>{(text.split(" ").length - 1) * 0.008} minutes to read</p>
        <p id='preview' style={{border : text !== ""? "2px solid black" : "none"}}><strong>{text}</strong></p>
    </div>
    </>
  )
}

