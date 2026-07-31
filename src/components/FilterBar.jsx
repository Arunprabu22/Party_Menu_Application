import { useState } from "react";
import "./FilterBar.css";

const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "starter", label: "Starter" },
  { value: "main", label: "Main" },
  { value: "sides", label: "Sides" },
  { value: "desert", label: "Desert" },
];

const DIETS = [
  { value: "all", label: "All" },
  { value: "veg", label: "Veg" },
  { value: "nonveg", label: "Non-Veg" },
];

const FilterBar = ({ category, diet, onCategoryChange, onDietChange, onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchInput);
  };

  return (
    <div className="filter-bar">
      <div className="filter-row">
        <span className="filter-row-label">Category</span>
        <div className="chip-group">
          {CATEGORIES.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`chip ${category === option.value ? "active" : ""}`}
              onClick={() => onCategoryChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-row">
        <span className="filter-row-label">Diet</span>
        <div className="chip-group">
          {DIETS.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`chip ${diet === option.value ? "active" : ""}`}
              onClick={() => onDietChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <form className="search-row" onSubmit={handleSearchSubmit}>
        <label htmlFor="menu-search" className="visually-hidden">
          Search dishes by name
        </label>
        <input
          id="menu-search"
          type="text"
          className="search-input"
          placeholder="Search dishes by name…"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button type="submit" className="btn btn-primary search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default FilterBar;
