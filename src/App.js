import React, { useState, useEffect } from "react";
import { downloadFile } from "./utils/utilities";
import "./App.css";
import ConsoleTx from "./ConsoleTx";
import Tx from "./Tx";
import Image from "./image/Image";
import Prompt from "./prompt/Prompt";

export default function App() {
  // The stack is every component present in the terminal view
  const [contentStack, setContentStack] = useState([
    { type: "consoleTx", text: "welcome" },
  ]);

  // Whenever something is added to the content stack, the page
  // scrolls to the bottom to emulate the behaviour of terminals
  useEffect(() => {
    // Doesn't work without the setTimeout for some reason...
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }, [contentStack]);

  // Updates the stack adding the specified element
  function updateStack(newContent) {
    console.log("updateStack", newContent);
    // If the new content has a command, add it to the state to preserve
    // the console's history
    // If not, skip it
    setContentStack(
      contentStack.concat(
        newContent.command
          ? [{ type: "tx", text: newContent.command }, newContent]
          : [newContent]
      )
    );
  }

  // Function invoked by the Prompt component
  // Performs an action depending on the type returned by Prompt
  function pushContentStack(newContent) {
    // Evaluates clear because it clears the stack
    if (newContent.type === "clear") {
      setContentStack([{ type: "consoleTx", text: "welcome" }]);
      return;
    }
    // If the new prompt is a download type, trigger the download
    // then write the message
    if (newContent.type === "download") {
      // Download file receives a callback to the function to update the stack
      // so that it can tell the user that the file has been downloaded when it's ready
      newContent = {
        type: "consoleTx",
        text: "preparingDownload",
        command: newContent.command,
      };
      downloadFile(newContent.file, updateStack);
    }
    updateStack(newContent);
  }

  return (
    <div>
      {contentStack.map((content, index) => {
        let objectToShow;
        switch (content.type) {
          case "tx":
            objectToShow = <Tx key={index} text={content.text} />;
            break;
          case "consoleTx":
            objectToShow = <ConsoleTx key={index} text={content.text} />;
            break;
          case "image":
            objectToShow = (
              <Image key={index} image={content.image} title={content.title} />
            );
            break;
          default:
            break;
        }
        return objectToShow;
      })}
      <Prompt pushContentStack={pushContentStack} />
    </div>
  );
}
