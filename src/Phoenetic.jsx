import React from "react";

export default function Phoenetic(props) {
  console.log(props.phonetic);
  return <div className="Phonetic">{props.phonetic.text}</div>;
}
