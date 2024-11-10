import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }

  function defaultSearch() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function search(event) {
    event.preventDefault();
    defaultSearch();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    defaultSearch();
  }

  if (loaded) {
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
  } else {
    load();
    return "Loading...";
  }
}
