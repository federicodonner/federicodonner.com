import React, { useState, useEffect } from "react";
import "./image.css";
import profilePicture from "../images/profilepicture.gif";

export default function Image(props) {
  const [imageToShow, setImageToShow] = useState(null);

  useEffect(() => {
    switch (props.image) {
      case "profilePicture":
        setImageToShow(profilePicture);
        break;
      default:
        break;
    }
  }, [props]);

  return (
    <div>
      {props.title && <p>> {props.title}</p>}
      <p>
        <img
          src={imageToShow}
          className={props.image}
          alt="Something went wrong?"
        />
      </p>
    </div>
  );
}
