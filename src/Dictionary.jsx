import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          className="searchBox"
          type="search"
          placeholder="Type a word..."
          onChange={handleKeywordChange}
        />
        <input className="searchButton" type="submit" value="Search" />
      </form>
      <br />
      <section>
        {" "}
        <Results results={results} />
      </section>
    </div>
  );
}
