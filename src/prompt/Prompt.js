import React, { useRef } from "react";
import promptCommands from "../data/promptCommands";
import "./prompt.css";

export default function Prompt(props) {
  const promptRef = useRef(null);

  // The propmt only reacts when an enter is pressed
  function detectEnter(e) {
    if (e.key === "Enter") {
      // Loads the unrecognized text first
      // it will be overwritten if it's found
      var contentToAdd = {
        type: "consoleTx",
        text: "notRecognized",
      };
      // Searches for the prompt command in the dictionary
      promptCommands.map((dictionaryEntry) => {
        // For each dictionary entry tries to find the entered term
        if (
          dictionaryEntry.words.indexOf(
            promptRef.current.value.toLowerCase()
          ) !== -1
        ) {
          contentToAdd = dictionaryEntry;
        }
        return false;
      });
      // Adds the search term to preserve it in the cosole
      contentToAdd["command"] = promptRef.current.value;
      props.pushContentStack(contentToAdd);
      // Clears the prompt to enter a new command
      promptRef.current.value = "";
    }
  }

  return (
    <div className="promptContainer">
      >{" "}
      <input
        type="text"
        size=""
        ref={promptRef}
        onKeyDown={detectEnter}
        autoFocus
      />
    </div>
  );
}
