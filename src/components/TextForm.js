import React from "react";
import { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [mystyle, setMystyle] = useState({
    color: "black",
    background: "white",
    border: "2px solid black",
  });
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleClrClick = () => {
    setText("");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleCopyClick = () => {
    var text = document.getElementById("mytextbox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!", "success");
  };
  const handleThemeClick = () => {
    if (mystyle.color === "white") {
      setMystyle({
        color: "black",
        background: "white",
        border: "2px solid black",
      });
    } else {
      setMystyle({
        color: "white",
        background: "black",
        border: "2px solid white",
      });
    }
    props.showAlert("Theme switched successfully!", "success");
  };
  return (
    <div>
      <div>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            style={mystyle}
            value={text}
            onChange={handleChange}
            className="form-control"
            id="mytextbox"
            rows="10"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClrClick}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleThemeClick}
        >
          Change Theme
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
      </div>
      <div className="container">
        Words:{" "}
        {
          text.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length
        }{" "}
        Characters: {text.length}
      </div>
    </div>
  );
};

export default TextForm;
