import React, { useState } from "react";
import "./App.css";
import ConsoleTx from "./ConsoleTx";
import Tx from "./Tx";
import Image from "./image/Image";
import Prompt from "./prompt/Prompt";

export default function App() {
  const [contentStack, setContentStack] = useState([
    { type: "consoleTx", text: "welcome" },
  ]);

  function pushContentStack(newContent) {
    if (newContent.type === "clear") {
      setContentStack([{ type: "consoleTx", text: "welcome" }]);
      return;
    }
    var auxiliaryArray = JSON.parse(JSON.stringify(contentStack));
    auxiliaryArray.push({ type: "tx", text: newContent.command });
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
