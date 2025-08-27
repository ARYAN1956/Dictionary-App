import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WordDetails from "./components/WordDetails";
import NoResults from "./components/NoResults";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [wordData, setWordData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async (word) => {
    setQuery(word);
    setNotFound(false);
    setWordData(null);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!response.ok) {
        setNotFound(true);
        return;
      }
      const data = await response.json();
      setWordData(data[0]); // only first main entry
    } catch (error) {
      setNotFound(true);
    }
  };

  return (
    <div className="app">
      <h1 className="title">Dictionary</h1>
      <p className="subtitle">Discover meanings, synonyms, and examples</p>
      <SearchBar onSearch={handleSearch} />

      <div className="content">
        {notFound && <NoResults query={query} />}
        {wordData && <WordDetails wordData={wordData} />}
      </div>
    </div>
  );
}
