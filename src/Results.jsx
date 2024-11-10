import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    let phoneticText;

    if (props.results.phonetics && props.results.phonetics[1]) {
      phoneticText = props.results.phonetics[1].text;
    } else if (props.results.phonetics && props.results.phonetics[0]) {
      phoneticText = props.results.phonetics[0].text;
    } else {
      phoneticText = "Phonetic not available";
    }

    return (
      <div className="Results">
        <div className="header">
          {" "}
          <h2>{props.results.word}</h2>
          {phoneticText}
        </div>

        <br />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
