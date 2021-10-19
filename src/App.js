import React, { useState, useEffect } from "react";
import "./App.css";
import ConsoleTx from "./ConsoleTx";
import Tx from "./Tx";
import Image from "./image/Image";
import Prompt from "./prompt/Prompt";

export default function App() {
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
      console.log(newContent.file);
      newContent = {
        type: "consoleTx",
        text: "downloading",
        command: newContent.command,
      };
    }
    // Copies the arry in state
    var auxiliaryArray = JSON.parse(JSON.stringify(contentStack));
    // Adds the component that shows the previously entered command in prompt
    auxiliaryArray.push({ type: "tx", text: newContent.command });
    // Pushes the new content
    auxiliaryArray.push(newContent);
    setContentStack(auxiliaryArray);
  }

  return (
    <div>
      {contentStack.map((content, index) => {
        var objectToShow;
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
