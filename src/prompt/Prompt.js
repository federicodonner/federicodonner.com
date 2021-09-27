import React, { useRef } from "react";
import promptCommands from "../data/promptCommands";
import "./prompt.css";

export default function Prompt(props) {
  const promptRef = useRef(null);

  function detectEnter(e) {
    if (e.key === "Enter") {
      var contentToAdd = promptCommands[promptRef.current.value];
      if (!contentToAdd) {
        contentToAdd = {
          type: "consoleTx",
          text: "notRecognized",
        };
      }
      contentToAdd["command"] = promptRef.current.value;
      props.pushContentStack(contentToAdd);
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
