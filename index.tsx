import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSort = () => {
    const numbersArray = inputValue
      .split(",")
      .map((number) => Number(number.trim()));

    if (sortOrder === "asc") {
      numbersArray.sort((a, b) => a - b);
    } else {
      numbersArray.sort((a, b) => b - a);
    }

    setSortedNumbers(numbersArray);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Number Sorter App</h1>
        <div>
          <div className="input-box">
            <h2>Input Numbers:</h2>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter numbers separated by comma"
            />
          </div>
          <div className="input-box">
            <h2>Sort Order:</h2>
            <select value={sortOrder} onChange={handleSortOrderChange}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button onClick={handleSort}>Sort</button>
        </div>
        {sortedNumbers.length > 0 && (
          <div className="output-box">
            <h2>Output Numbers:</h2>
            <p>{sortedNumbers.join(", ")}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
