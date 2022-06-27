import React, { useState } from "react";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted To UpperCase!', 'success');
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleLoClick = (e) => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted To LowerCase!', 'success');
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text Cleared!', 'success');
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    // console.log(text.value);?
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to Clipboard!', 'success');
  };
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: props.mode === 'dark'? 'grey':'white',
                    color:  props.mode === 'dark'? 'white':'black'}}
          ></textarea>
        </div>
        <div className="container">
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        {/* <button className='btn btn-primary mx-1'></button> */}
        </div>
      </div>
      <div className="container my-2" style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((value) => value !== "").length
          }{" "}
          words and {text.trim().length} Characters
        </p>
        <p>{text ? 0.008 * text.trim().length : 0} Mintues Read</p>
      </div>
    </>
  );
}
