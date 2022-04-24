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
      document.getSelection().removeAllRanges();
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
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
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
        <button
          disabled={!text.length === 0}
          className="btn btn-primary mx-1"
          onClick={getRandomSentence}
        >
          Generate random text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1  my-1"
          onClick={clickUpHandler}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1  my-1"
          onClick={clickLoHandler}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1  my-1"
          onClick={clickClearHandler}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={clickCopyHandler}
        >
          Copy to clipboard
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}

export default TextForm;
