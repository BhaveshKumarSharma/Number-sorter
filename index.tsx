"use client";
import React, { useState } from "react";

function NumberSorter() {
  const [inputValue, setInputValue] = useState("");
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortOrder(event.target.value);
  };

  const handleSort = () => {
    const numbersArray = inputValue
      .split(",")
      .map((number) => {
        const parsedNumber = Number(number.trim());
        return isNaN(parsedNumber) ? 0 : parsedNumber;
      })
      .filter((number) => number !== 0);

    if (sortOrder === "asc") {
      numbersArray.sort((a, b) => a - b);
    } else {
      numbersArray.sort((a, b) => b - a);
    }

    setSortedNumbers(numbersArray);
  };

  return (
    <div className="App">
      <header className="App-header me-4">
        <h1 className="text-2xl font-bold mb-4">Number Sorter</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">Input Numbers:</h2>
            <input
              type="text"
              required
              className="border-0 rounded-lg p-2 w-full bg-muted text-muted-foreground"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter numbers separated by comma eg: 1,12,43,23,1"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">Select Sort Order:</h2>
            <select
              className="border rounded-lg p-2 w-full bg-accent"
              value={sortOrder}
              onChange={handleSortOrderChange}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <button
            className="rounded-lg border-0 bg-foreground text-background p-3"
            onClick={handleSort}
          >
            Sort
          </button>
        </div>
        {sortedNumbers.length > 0 && (
          <div className="output-box mt-4">
            <h2 className="text-xl font-bold mb-2">Output Numbers:</h2>
            <p>{sortedNumbers.join(", ")}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default NumberSorter;
