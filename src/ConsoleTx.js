import React, { useState, useEffect } from "react";
import texts from "./data/texts";
import { setBrowserLanguage } from "./utils/utilities";

// This component renders the text one letter at a time
export default function ConsoleTx(props) {
  const [language] = useState(setBrowserLanguage());
  const [textArray, setTextArray] = useState(null);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [processedString, setProcessedString] = useState(null);

  const LETTERSPEED = 15;
  //eslint-disable-next-line
  // useEffect(() => {
  //   setLanguage(setBrowserLanguage());
  // });

  // Splits the string letter by letter to render it one by one
  useEffect(() => {
    setTextArray(texts[language][props.text].split(""));
  }, [props, language]);

  // The array is dropped letter by letter into a string which is rendered
  // When the string is finished, it runs a function in the parent
  // advancing the process
  useEffect(() => {
    if (textArray) {
      setTimeout(() => {
        if (currentLetter < textArray.length) {
          setProcessedString(
            processedString
              ? processedString + textArray[currentLetter]
              : textArray[currentLetter]
          );
          setCurrentLetter(currentLetter + 1);
        }
      }, LETTERSPEED);
    }
    //eslint-disable-next-line
  }, [textArray, currentLetter]);

  return <>{language && processedString && <p>> {processedString}</p>}</>;
}
