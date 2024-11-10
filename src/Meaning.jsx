import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <span>
        {" "}
        <strong>Definition :</strong>
        {"  "}
        {props.meaning.definitions[0].definition}
        <br />
        <span className="example"> {props.meaning.definitions[0].example}</span>
      </span>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
