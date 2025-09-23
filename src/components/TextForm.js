import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase" , "success");
  }

  const handleLoClick = () => {
    setText(text.toLowerCase());
  }

  const handleCapClick = () => {
    let updatedText = text.toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
        setText(updatedText);
        props.showAlert("Converted to Capitalized" , "success");

  }

  const handleOnChange = (evt) => {
    setText(evt.target.value);
  }

  const handleClearClick = () => {
    let clearText = "";
    setText(clearText);
    props.showAlert("Text is Cleared" , "success");

  }

  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is Copied" , "success");

  }

  const handleExtraSpaces = () => {
    let newTxt = text.split(/[ ]+/);
    setText(newTxt.join(" ")) 
    props.showAlert("Extra Spaces Removed" , "success");
    
  }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white' : 'grey'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white',color: props.mode==='dark' ? 'white' : 'grey'}} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary my-2" onClick={handleCapClick}>Convert to Capitalized</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Handle Extra Spaces</button>

        </div>
    </div>
    <div className="container" style={{color: props.mode==='dark' ? 'white' : 'grey'}}>
        <h1>Your Text Summary</h1>
        <p><b>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length}</b> words and <b>{text.length}</b> characters</p>
        <p> { 0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter Something in the textBox above to preview here"}</p>
    </div>
    </>
  )
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired,
}
