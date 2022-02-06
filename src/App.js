import React, { useState } from "react";
import "./App.scss";
import Header from "../src/components/Header/header";
import MainContent from "../src/components/MainContent/maincontent";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [filterKeywords, setFilterKeywords] = useState([]);

  const addFilterKeyword = (data) => {
    setFilterKeywords([...filterKeywords, data]);
  };

  const clearFilterKeywords = () => {
    setFilterKeywords([]);
  };

  // remove item from filterKeywords
  const removeFilterKeyword = (data) => {
    setFilterKeywords(filterKeywords.filter((keyword) => keyword !== data));
  };

  return (
    <div className="App">
      <Header />
      {filterKeywords.length > 0 && (
        <SearchBar
          keywords={filterKeywords}
          onClearItem={removeFilterKeyword}
          onClose={clearFilterKeywords}
        />
      )}

      <MainContent setKeywords={addFilterKeyword} />
    </div>
  );
}

export default App;
