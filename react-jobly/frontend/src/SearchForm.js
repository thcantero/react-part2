import React, { useState } from 'react';

function SearchForm({ searchFor, type = "companies" }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    let searchFilters = {};
    
    if (type === "companies") {
      searchFilters.name = searchTerm;
    } else if (type === "jobs") {
      searchFilters.title = searchTerm;
    }
    
    searchFor(searchFilters);
    setSearchTerm("");
  }

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <div className="SearchForm mb-4">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className="form-control form-control-lg"
            name="searchTerm"
            placeholder="Enter search term..."
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-lg btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;