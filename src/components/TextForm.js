import React, { useState } from "react";
import sentences from "./utility/Sentences";

function TextForm(props) {
  const [text, setText] = useState("");

  const onChangehandler = (event) => {
    console.log("onchange triggered");
    setText(event.target.value);
  };
  const clickUpHandler = (event) => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Text converted to Uppercase successfully", "success");
  };
  const clickLoHandler = (event) => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert("Text converted to Lowercase successfully", "success");
  };

  const clickClearHandler = (event) => {
    setText("");
    props.showAlert("Text cleared successfully", "success");
  };

  const clickCopyHandler = (event) => {
    var cpytxt = document.getElementById("mybox");
    cpytxt.select();
    if (cpytxt.value.length > 0) {
      navigator.clipboard.writeText(cpytxt.value);
      props.showAlert("Text copied to clipboard successfully", "success");
    } else props.showAlert("Please enter some text to copy!!", "warning");
  };

  function getRandomSentence() {
    var index = Math.floor(Math.random() * sentences.length);
    setText(sentences[index]);
    props.showAlert("Random text generated", "success");
  }

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3">
          <h2>{props.heading}</h2>

          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "darkgrey",
              width: "1000px",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            value={text}
            onChange={onChangehandler}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={getRandomSentence}>
          Generate random text
        </button>
        <button className="btn btn-primary mx-2" onClick={clickUpHandler}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary" onClick={clickLoHandler}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={clickClearHandler}>
          Clear text
        </button>
        <button className="btn btn-primary" onClick={clickCopyHandler}>
          Copy to clipboard
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.length > 0 ? text.trim().split(" ").length + " " : 0 + " "}
          words and {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.08} Minutes read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in above text field to preview it here."}
        </p>
      </div>
    </>
  );
}

export default TextForm;
