import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [meaning, setMeaning] = useState(" ");

  var emojiCollection = {
    "🙂": "Smiling",
    "🫠": "Melting Face",
    "🤫": "Shushing",
    "🤔": "Thinking",
    "😗": "Kissing",
    "😉": "Winking",
    "🤬": "Cursing",
    "🥱": "Yawning",
    "🙏": "Namaste",
    "😯": "Hushed Face"
  };

  var emojiList = Object.keys(emojiCollection);

  function changeHandler(event) {
    var userInput = event.target.value;

    //console.log(userInput);

    var meaning = emojiCollection[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in our collection";
    }
    if (userInput === "") {
      meaning = "";
    }
    setMeaning(meaning);
  }
  function clickHandler(emoji) {
    var meaning = emojiCollection[emoji];

    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Enter Your Emoji</h1>

      <input onChange={changeHandler} />

      <div>{meaning}</div>

      <h3> Our Emoji Collection </h3>
      {emojiList.map(function (emoji) {
        return (
          <span
            onClick={() => clickHandler(emoji)}
            style={{ fontSize: "3rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
